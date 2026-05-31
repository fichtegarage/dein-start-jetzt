import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { name, email, message } = (await req.json()) as ContactRequest;

    // Validate inputs server-side
    if (!name || name.trim().length < 2 || name.length > 100) {
      return new Response(JSON.stringify({ error: "Ungültiger Name" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Ungültige E-Mail" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!message || message.trim().length < 10 || message.length > 1000) {
      return new Response(JSON.stringify({ error: "Ungültige Nachricht" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Store in database
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabaseAdmin
      .from("contacts")
      .insert({ name: name.trim(), email: email.trim(), message: message.trim() });

    if (dbError) {
      console.error("DB insert error:", dbError);
      throw new Error("Datenbankfehler");
    }

    // Send email via Resend
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Kontaktformular <hallo@jakob-neumann.net>",
        to: ["jakob.neumann@posteo.de"],
        subject: `Neue Kontaktanfrage von ${name.trim()}`,
        html: `
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>E-Mail:</strong> ${email.trim()}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.trim().replace(/\n/g, "<br>")}</p>
        `,
        reply_to: email.trim(),
      }),
    });

    if (!emailRes.ok) {
  const errBody = await emailRes.text();
  console.error(`Resend API error [${emailRes.status}]:`, errBody);
  throw new Error(`E-Mail-Versand fehlgeschlagen (${emailRes.status})`);
}

return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unbekannter Fehler";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen ein").max(100, "Name ist zu lang"),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse ein").max(255, "E-Mail ist zu lang"),
  message: z.string().trim().min(10, "Bitte schreibe mindestens 10 Zeichen").max(1000, "Nachricht ist zu lang"),
});

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Nachricht gesendet!",
      description: "Ich melde mich innerhalb von 24 Stunden bei dir.",
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="kontakt" className="section-padding">
      <div ref={ref} className={`container transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5">
              Kontakt
            </h2>
            <p className="text-lg text-muted-foreground">
              Schreib mir eine Nachricht. Ich freue mich von dir zu hören.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-trust-badge/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-trust-badge" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nachricht gesendet!</h3>
                <p className="text-muted-foreground">
                  Ich melde mich innerhalb von 24 Stunden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Dein Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-12 rounded-xl bg-secondary border-0 ${errors.name ? "ring-2 ring-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-Mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="deine@email.de"
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-12 rounded-xl bg-secondary border-0 ${errors.email ? "ring-2 ring-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Wie kann ich dir helfen?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`rounded-xl bg-secondary border-0 resize-none ${errors.message ? "ring-2 ring-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1.5">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full h-12 rounded-full text-[15px] font-medium" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Nachricht senden
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Augsburg & Umgebung • coach@example.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

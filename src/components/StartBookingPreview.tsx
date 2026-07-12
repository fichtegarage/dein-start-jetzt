// src/components/StartBookingPreview.tsx
// Rein visuelles, NICHT-interaktives Mockup der Slot-Auswahl.
// Kein Embed, kein iFrame, kein Datenfluss zu buchung.jakob-neumann.net —
// vermittelt nur die Leichtigkeit des Buchens (§6 DSE bleibt unberührt).
// Brand-konform: flach, kein Verlauf/Glow, Pill/Radien aus dem Brand Guide.

import { Calendar, Clock, Check } from "lucide-react";

const days = [
  { label: "Mo", date: "13" },
  { label: "Di", date: "14", active: true },
  { label: "Mi", date: "15" },
  { label: "Do", date: "16" },
];

const slots = ["09:00", "11:30", "17:00"];

const StartBookingPreview = () => {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-sm mx-auto rounded-3xl border p-6"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E2DFD8" }}
    >
      <div className="flex items-center gap-2 mb-5">
        <Calendar className="w-4 h-4" style={{ color: "#1B3A5C" }} strokeWidth={1.5} />
        <span className="text-[13px] font-medium tracking-[0.02em]" style={{ color: "#0F1A2E" }}>
          Erstgespräch – freie Termine
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-5">
        {days.map((day) => (
          <div
            key={day.label}
            className="flex flex-col items-center justify-center gap-1 rounded-xl py-2.5"
            style={
              day.active
                ? { backgroundColor: "#0F1A2E", color: "#F4F2ED" }
                : { backgroundColor: "#F4F2ED", color: "#3A4459" }
            }
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.06em]">{day.label}</span>
            <span className="text-sm font-semibold">{day.date}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {slots.map((slot, i) => (
          <div
            key={slot}
            className="flex items-center justify-between rounded-xl px-4 py-2.5"
            style={{
              border: "1px solid #C5BFB2",
              backgroundColor: i === 1 ? "#1B3A5C1A" : "transparent",
            }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" style={{ color: "#3A4459" }} strokeWidth={1.5} />
              <span className="text-sm font-medium" style={{ color: "#0F1A2E" }}>{slot} Uhr</span>
            </div>
            {i === 1 && <Check className="w-4 h-4" style={{ color: "#1B3A5C" }} strokeWidth={1.5} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartBookingPreview;

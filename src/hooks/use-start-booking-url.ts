import { useSearchParams } from "react-router-dom";

// Zero-Friction-Handoff (Arbeitsauftrag /start v2):
// Deep-Link direkt in die Slot-Auswahl, IMMER src=start, plus Durchreichung
// der an /start ankommenden Kampagnen-Parameter. Robust gegen "keine Parameter vorhanden".

const BOOKING_BASE_URL = "https://buchung.jakob-neumann.net/erstgespraech";

const PASSTHROUGH_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

/**
 * Liefert die Ziel-URL für den einen CTA-Pfad auf /start.
 * Setzt immer src=start und reicht vorhandene Kampagnen-Parameter 1:1 durch.
 */
export function useStartBookingUrl(): string {
  const [searchParams] = useSearchParams();

  const url = new URL(BOOKING_BASE_URL);
  url.searchParams.set("src", "start");

  for (const key of PASSTHROUGH_PARAMS) {
    const value = searchParams.get(key);
    if (value) {
      url.searchParams.set(key, value);
    }
  }

  return url.toString();
}

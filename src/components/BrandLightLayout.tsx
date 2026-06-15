// NEU-225 Schritt 2: Route-Wrapper für öffentliche Brand-Light-Funnel-Seiten.
// Rendert .brand-light-Klasse als DOM-Subtree-Scope — shadcn-Token-Variablen
// werden darin auf Warm-Creme-Palette überschrieben, ohne :root (Dark) anzufassen.
// Aktuell: /erstgespraech + /erstgespraech/bestaetigt (in App.tsx).
// Später optional: /datenschutz, /start (per GPL-Entscheid).
import { Outlet } from 'react-router-dom';

export default function BrandLightLayout() {
  return (
    <div className="brand-light min-h-screen bg-background text-foreground">
      <Outlet />
    </div>
  );
}

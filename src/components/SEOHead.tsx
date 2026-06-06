import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
}

/**
 * SEOHead – setzt dynamische Meta-Tags pro Seite.
 *
 * Verwendung:
 *   <SEOHead
 *     title="Impressum | Jakob Neumann Training"
 *     description="Impressum von Jakob Neumann Training, Personal Trainer in Augsburg."
 *     canonical="https://www.jakob-neumann.net/impressum"
 *     noIndex={true}
 *   />
 *
 * Defaults (wenn keine Props übergeben) → Hauptseite
 */
const SEOHead = ({
  title = "Personal Trainer Augsburg | Jakob Neumann Training",
  description = "Persönliches Indoor-Personal-Training in Augsburg. Einzelsessions im JohnReed Augsburg, App-gestützte Trainingspläne, persönliche Begleitung. Aufbauen, nicht aufpumpen.",
  canonical = "https://www.jakob-neumann.net/",
  noIndex = false,
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;

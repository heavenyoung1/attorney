import { Helmet } from "react-helmet-async";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://xn--32-6kcajl7b5a2b.xn--p1ai";
const SITE_NAME = "Адвокат Мефёд А.И.";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function SEOHead({ title, description, canonical }: SEOHeadProps) {
  const fullCanonical = `${SITE_URL}${canonical ?? ""}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

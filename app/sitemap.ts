import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/advokati/aleksandar-veselinovic`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/advokati/tijana-obradovic`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/advokati/jovan-polic`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/advokati/nikola-sretenovic`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/advokati/tijana-balcakovic`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/advokati/aleksandra-spasic`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/advokati/zdravko-eric`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}

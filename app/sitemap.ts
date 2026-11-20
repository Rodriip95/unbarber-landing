import type { MetadataRoute } from "next";
import { config } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/barberos", "/arrepentimiento"].map((p) => ({ url: `${config.siteUrl}${p}` }));
}

import type { MetadataRoute } from "next";
import { PROJECTS } from "./data/projects";
import { SERVICES } from "./data/services";
import { DESIGN_LIBRARY } from "./data/designLibrary";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://orchidinteriors.com";
const lastModified = new Date("2026-09-10T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/orchid-interiors",
    "/design-library",
  ];

  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" || path === "/orchid-interiors" ? 1 : 0.8,
    })),
    ...PROJECTS.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...SERVICES.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...DESIGN_LIBRARY.map((category) => ({
      url: `${siteUrl}/design-library/${category.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
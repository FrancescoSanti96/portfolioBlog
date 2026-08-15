import type { MetadataRoute } from "next";
import { getBlogPosts } from "app/blog/utils";
import { siteConfig } from "app/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.metadata.updatedAt ?? post.metadata.publishedAt,
  }));

  const routes = ["", "/projects", "/blog"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...posts];
}

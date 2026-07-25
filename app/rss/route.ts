import { getBlogPosts } from "app/blog/utils";
import { siteConfig } from "app/config/site";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const itemsXml = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .map((post) => {
      const postUrl = `${siteConfig.url}/blog/${post.slug}`;

      return `<item>
        <title>${escapeXml(post.metadata.title)}</title>
        <link>${escapeXml(postUrl)}</link>
        <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
        <description>${escapeXml(post.metadata.summary)}</description>
        <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escapeXml(siteConfig.name)}</title>
      <link>${escapeXml(siteConfig.url)}</link>
      <description>${escapeXml(siteConfig.description)}</description>
      <language>it-IT</language>
      <atom:link href="${escapeXml(`${siteConfig.url}/rss`)}" rel="self" type="application/rss+xml" />
      ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

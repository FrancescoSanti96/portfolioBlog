import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

const postMetadataSchema = z.object({
  title: z.string().trim().min(1),
  publishedAt: z
    .string()
    .trim()
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "publishedAt deve essere una data valida",
    }),
  updatedAt: z
    .string()
    .trim()
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "updatedAt deve essere una data valida",
    })
    .optional(),
  summary: z.string().trim().min(1),
  image: z.string().trim().optional(),
});

export type PostMetadata = z.infer<typeof postMetadataSchema>;

export type BlogPost = {
  metadata: PostMetadata;
  slug: string;
  content: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  const result = postMetadataSchema.safeParse(data);

  if (!result.success) {
    throw new Error(
      `Frontmatter non valido in ${filePath}: ${z.prettifyError(result.error)}`,
    );
  }

  return { metadata: result.data, content: content.trim() };
}

function getMDXData(dir: string): BlogPost[] {
  return getMDXFiles(dir).map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  const normalizedDate = date.includes("T") ? date : `${date}T00:00:00`;
  const targetDate = new Date(normalizedDate);
  const daysAgo = Math.floor(
    (currentDate.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  let relativeDate = "";

  if (daysAgo >= 365) {
    relativeDate = `${Math.floor(daysAgo / 365)} anni fa`;
  } else if (daysAgo >= 30) {
    relativeDate = `${Math.floor(daysAgo / 30)} mesi fa`;
  } else if (daysAgo > 0) {
    relativeDate = `${daysAgo} giorni fa`;
  } else {
    relativeDate = "Oggi";
  }

  const fullDate = targetDate.toLocaleString("it-IT", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return includeRelative ? `${fullDate} (${relativeDate})` : fullDate;
}

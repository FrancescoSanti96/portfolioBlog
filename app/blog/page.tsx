import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description:
    'Appunti su sviluppo software, algoritmi, sistemi e progettazione di prodotti digitali.',
}

type BlogPageProps = {
  searchParams?: Promise<{
    page?: string
  }>
}

const POSTS_PER_PAGE = 5

export default async function Page({ searchParams }: BlogPageProps) {
  const query = await searchParams
  const page = Number(query?.page)
  const currentPage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1

  return (
    <section>
      <p className="eyebrow">Scrittura</p>
      <h1 className="mb-3 mt-2 text-4xl font-semibold text-[var(--ink)]">
        Blog
      </h1>
      <p className="mb-10 max-w-2xl leading-7 text-[var(--muted)]">
        Appunti di studio e approfondimenti su sviluppo software, algoritmi,
        sistemi e prodotti digitali.
      </p>
      <BlogPosts
        currentPage={currentPage}
        postsPerPage={POSTS_PER_PAGE}
        showHeading={false}
      />
    </section>
  )
}

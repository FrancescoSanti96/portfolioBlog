import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

type BlogPageProps = {
  searchParams?: {
    page?: string
  }
}

const POSTS_PER_PAGE = 5

export default function Page({ searchParams }: BlogPageProps) {
  let page = Number(searchParams?.page)
  let currentPage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts
        currentPage={currentPage}
        postsPerPage={POSTS_PER_PAGE}
        showHeading={false}
      />
    </section>
  )
}

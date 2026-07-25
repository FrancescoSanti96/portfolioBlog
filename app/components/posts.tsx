import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

type BlogPostsProps = {
  currentPage?: number
  postsPerPage?: number
  showHeading?: boolean
  limit?: number
}

export function BlogPosts({
  currentPage = 1,
  postsPerPage,
  showHeading = true,
  limit,
}: BlogPostsProps) {
  const sortedBlogs = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }

    return 1
  })

  const totalPages = postsPerPage
    ? Math.ceil(sortedBlogs.length / postsPerPage)
    : 1
  const safeCurrentPage =
    totalPages > 0 ? Math.min(Math.max(currentPage, 1), totalPages) : 1
  const paginatedBlogs = postsPerPage
    ? sortedBlogs.slice(
        (safeCurrentPage - 1) * postsPerPage,
        safeCurrentPage * postsPerPage
      )
    : limit
      ? sortedBlogs.slice(0, limit)
      : sortedBlogs

  function getPageHref(page: number) {
    return page === 1 ? '/blog' : `/blog?page=${page}`
  }

  return (
    <div>
      {showHeading && (
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center md:text-left">
          Articoli recenti
        </h1>
      )}
      <div>
        {paginatedBlogs.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="mt-8 flex items-center justify-center gap-2 md:justify-start"
        >
          <Link
            href={getPageHref(safeCurrentPage - 1)}
            aria-disabled={safeCurrentPage === 1}
            className={`rounded border px-3 py-1 text-sm transition-colors ${
              safeCurrentPage === 1
                ? 'pointer-events-none border-neutral-200 text-neutral-400 dark:border-neutral-800 dark:text-neutral-600'
                : 'border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900'
            }`}
          >
            Precedente
          </Link>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1
              const isActive = page === safeCurrentPage

              return (
                <Link
                  key={page}
                  href={getPageHref(page)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded px-3 py-1 text-sm transition-colors ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'border border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900'
                  }`}
                >
                  {page}
                </Link>
              )
            })}
          </div>

          <Link
            href={getPageHref(safeCurrentPage + 1)}
            aria-disabled={safeCurrentPage === totalPages}
            className={`rounded border px-3 py-1 text-sm transition-colors ${
              safeCurrentPage === totalPages
                ? 'pointer-events-none border-neutral-200 text-neutral-400 dark:border-neutral-800 dark:text-neutral-600'
                : 'border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900'
            }`}
          >
            Successiva
          </Link>
        </nav>
      )}
    </div>
  )
}

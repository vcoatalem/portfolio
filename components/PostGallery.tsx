import type { Post } from 'lib/sanity.queries'
import PostPreview from './PostPreview'

export default function PostGallery({ posts }: { posts: Post[] }) {
  return (
    <section>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={`/posts/${post.slug}`}
            excerpt={post.excerpt}
        />
        ))}
      </div>
    </section>
  ) //TODO: make 'intro' a proper props of projects in sanity (similar to excerpt for posts)
}

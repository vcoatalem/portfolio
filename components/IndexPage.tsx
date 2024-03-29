import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import MoreFromMe from 'components/contact/MoreFromMe'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

import PostGallery from './PostGallery'
import BlogBody from './BlogBody'


export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  //const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        
 
        <Container>
   
          <BlogHeader level={1} />
          <BlogBody>
            <div className='max-w-4xl mx-auto'>
              {heroPost && (
                <HeroPost
                  title={heroPost.title}
                  coverImage={heroPost.coverImage}
                  date={heroPost.date}
                  slug={`/posts/${heroPost.slug}`}
                  excerpt={heroPost.excerpt}
                />
              )}
              <PostGallery
                posts={posts.slice(1)}
              />
            </div>
          </BlogBody>
        </Container>
        <MoreFromMe />
      </Layout>
    </>
  )
}

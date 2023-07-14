import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

const projectFields = groq`
  _id,
  title,
  coverImage,
  technos,
  tags,
  'intro': content[0]{children[0]{text}},
  authors[]->{name, picture},
  "slug": slug.current
`//TODO: see how to extract 'text' field from children properly

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const projectIndexQuery = groq`
*[_type == "project"] {
  ${projectFields}
}`

export const projectAndMoreProjectsQuery = groq`
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${projectFields}
  }
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  slug?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  content?: any
}

export interface Project {
  _id: string
  title?: string
  slug?: string
  coverImage?: any
  technos?: [string]
  tags?: [string]
  productionUrl: string
  gitUrl: string
  authors?: [Author]
  intro?: any
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}

import Image from 'next/image'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'

import cover from './portrait.jpg'

export default memo(function IntroTemplate() {
  const [studioURL, setStudioURL] = useState(null)
  const [createPostURL, setCreatePostURL] = useState(null)
  const [isLocalHost, setIsLocalhost] = useState(false)

  const hasRepoEnvVars =
    process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER &&
    process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER &&
    process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG
  const repoURL = `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`
  const removeBlockURL = hasRepoEnvVars
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}/blob/main/README.md#how-can-i-remove-the-next-steps-block-from-my-blog`
    : `https://github.com/sanity-io/nextjs-blog-cms-sanity-v3#how-can-i-remove-the-next-steps-block-from-my-blog`

  const [hasUTMtags, setHasUTMtags] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setStudioURL(`${window.location.origin}/studio`)
      setCreatePostURL(
        `${window.location.origin}/studio/intent/create/template=post;type=post/`
      )
      setIsLocalhost(window.location.hostname === 'localhost')
      setHasUTMtags(window.location.search.includes('utm'))
    }
  }, [])

  if (hasUTMtags || !studioURL) {
    return
  }

  return (
    <div className="flex justify-center border border-gray-200 bg-gray-50">
      <div className="mb-8 grid max-w-screen-2xl grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32 ">
        <div className="self-center grayscale">
          <Image
            alt="me!"
            src={cover}
          />
          <div className="mt-10 hidden px-14 text-xs text-gray-700 md:block">
            <span>Powered by Vercel & Sanity</span>
          </div>
        </div>

        <div className="mx-6 md:mx-0 md:mr-24">
          <h2 className="mb-8 text-3xl font-bold tracking-wide md:text-5xl">
            More from me
          </h2>

          <ol>
            <Box
              circleTitle="1"
              element={
                <div>
                  <div className="col-span-2 mb-2 mt-1 text-xl font-semibold">
                    I write things !
                  </div>
                  <div className="text-s text-gray-700">
                    Check out my <a href="https://dev.to/vcoatalem">dev.to</a> profile
                  </div>

                  <div className="mt-3">
                    <Link
                      className="inline-flex rounded bg-pink-500 px-4 py-2 text-white hover:bg-blue-800"
                      href="https://dev.to/vcoatalem"
                    >
                      Follow me on Dev.To
                    </Link>
                  </div>
                </div>
              }
            />

            <Box
              circleTitle="2"
              element={
                <div>
                  <div className="col-span-2 mb-2 mt-1 text-xl font-semibold">
                    Like this website ?
                  </div>
                  <div className="text-s text-gray-700">
                    Check out <a className='font-bold text-pink-500' href="https://github.com/sanity-io/nextjs-blog-cms-sanity-v3">the original template</a> and <a className='font-bold text-pink-500' href="https://github.com/vcoatalem/portfolio"> my <em>adapted</em> version</a>
                  </div>
                </div>
              }
            />

            <Box
              circleTitle="3"
              element={
                <div>
                  <div className='col-span-2 mb-3 mt-1 text-xl font-semibold'>
                    Code::Stats is cool
                  </div>
                  <div className="text-s text-gray-700">
                    <a className='font-mono hover:text-blue-800 break-all' href="https://codestats.net/users/vcoatalem">https://codestats.net/users/vcoatalem</a>
                  </div>
                </div>
              }
            />

          </ol>
          <div className='mt-8'>
            <div className="mb-3 mt-1 text-4xl font-semibold">
              Interested in working together ?
            </div>
            <ul>
              <li className="mb-2">
                
                <PinkLink
                  href="https://www.linkedin.com/in/victor-coatalem/"
                  text="Connect with me on LinkedIn"
                  svgPath='M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'
                />
              </li>
              <li className="mb-2">
                <PinkLink
                  href="mailto:victor.coatalem@gmail.com"
                  text="Join me by mail"
                  svgPath='M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z'
                />
              </li>
            </ul>
          </div>

          <div className="text-center text-xs text-gray-700 md:invisible">

         
          </div>
        </div>
      </div>
    </div>
  )
})

function Box({
  circleTitle,
  element,
}: {
  circleTitle: string
  element: JSX.Element
}) {
  return (
    <li className="mt-2 grid grid-flow-col grid-rows-1 place-content-start gap-3">
      <div className="row-span-3 select-none">
        <div className="relative flex h-6 w-6 select-none items-center justify-center rounded-full bg-gray-200 p-4 text-center">
          {circleTitle}
        </div>
      </div>
      {element}
    </li>
  )
}

function PinkLink({ href, text, svgPath }: {href: string; text: string, svgPath: string }) {
  return (
    <a
      href={href}
      className="text-pink-500 underline hover:text-blue-800 flex flex-row"
      target="_blank"
      rel="noreferrer"
    >
      {svgPath ? (<svg
        className='flex mr-4'
        viewBox="0 0 24 24"
        fill="#222222"
        height="4em"
        width="4em"
      >
        <path d={svgPath} />
      </svg>) : <span/>}
      
      <span className='flex justify-start self-center text-2xl'>
        {text}
      </span>

    </a>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

import cover from './portrait.jpg'

import * as React from "react";

function IconLinkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      width="3em"
      {...props}
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
    </svg>
  );
}

function IconGmail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="3em"
      {...props}
    >
      <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
    </svg>
  );
}



export default memo(function MoreFromMe() {

  return (
    <div className="flex justify-center border border-gray-200 bg-gray-50">
      <div className="mb-8 md:mt-8 grid max-w-screen-2xl grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32 ">
        <div className="self-center grayscale hover:grayscale-0">
          <Image
            alt="me!"
            src={cover}
          />
          <div className="mt-10 hidden px-14 text-xs text-gray-700 md:block">
            <span>Powered by Vercel & Sanity</span>
          </div>
        </div>

        <div className="mx-6 md:mx-0 md:mr-24">
          <h2 className="mb-8 mt-4 text-3xl font-bold tracking-wide md:text-5xl">
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
                    Check out <a className='font-bold text-pink-500 hover:text-blue-800' href="https://github.com/sanity-io/nextjs-blog-cms-sanity-v3">the original template</a> and <a className='font-bold text-pink-500 hover:text-blue-800' href="https://github.com/vcoatalem/portfolio"> my <em>adapted</em> version</a>
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
                />
              </li>
              <li className="mb-2">
                <PinkLink
                  href="mailto:victor.coatalem@gmail.com"
                  text="Join me by mail"
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

function PinkLink({ href, text }: {href: string; text: string,  }) {
  return (
    <a
      href={href}
      className="text-pink-500 underline hover:text-blue-800 flex flex-row"
      target="_blank"
      rel="noreferrer"
    >
      {
        href.includes('mailto') ? <IconGmail/> : <IconLinkedin/>
      }
      
      <span className='flex justify-start self-center text-2xl ml-4'>
        {text}
      </span>

    </a>
  )
}

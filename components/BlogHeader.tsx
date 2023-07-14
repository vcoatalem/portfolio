import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'
import { useRouter } from 'next/router'

function styleNavLink({
  title,
  currentPath
}: {
  title: string
  currentPath: string
}) {

  if (currentPath == "/" || currentPath.includes("posts")) {
    if (title == "posts") { return <span>Articles.</span>}
    if (title == "projects") { return <span className='text-slate-500 hover:text-black'>Projects.</span> }
  }
  else {
    if (title == "posts") { return <span className='text-slate-500 hover:text-black'>Articles.</span>}
    if (title == "projects") { return <span >Projects.</span> }
  }
}

export default function BlogHeader({
  level
}: {
  level: 1 | 2
}) {
  const { asPath, pathname } = useRouter()
  console.log(asPath, pathname)

  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            <a href="/">{styleNavLink({ title: "posts", currentPath: asPath })}</a>
            <a href="/projects">{styleNavLink({ title: "projects", currentPath: asPath })}</a>
          </h1>
          <h4
            className={`mt-5 text-center text-lg  lg:text-2xl lg:pl-8 lg:text-left ${styles.portableText}`}
          >
            My journey in fullstack software engineering
          </h4>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {styleNavLink({ title: "posts", currentPath: asPath })}
            </Link>
            <Link href="/projects" className="hover:underline">
              {styleNavLink({ title: "projects", currentPath: asPath })}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}

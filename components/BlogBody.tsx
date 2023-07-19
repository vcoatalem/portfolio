import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'
import { useRouter } from 'next/router'


export default function BlogBody(props: { children: any }) {
 return (
  <div className='max-w-5xl mx-auto mt-5'>
    {props.children}
  </div>
 )
}

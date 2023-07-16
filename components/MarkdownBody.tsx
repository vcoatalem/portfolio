/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'
import { urlForImage } from 'lib/sanity.image'

import Image from 'next/image';

import styles from './PostBody.module.css'

const customComponents = {
  types: {
    image: ({ value }) => {
      console.log("image value: ", value)
      return (
        <Image
          className={`h-auto w-full xl:w-3/4 xl:mx-auto`}
          width={2000}
          height={1000}
          quality={100}
          alt={value?.asset?._ref}
          src={urlForImage(value?.asset?._ref).height(1000).width(2000).url()}
          sizes="100vw"
        />
      )
    }
  },
};

export default function MarkdownBody({ content }) {

  console.log("content: ", content)
  return (
    <div className={`mb-24 ${styles.portableText}`}>
      <PortableText
        value={content}
        components={customComponents}
      />
    </div>
  )
}

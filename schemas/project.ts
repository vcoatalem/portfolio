import { RocketIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import authorType from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'project',
  title: 'Project',
  icon: RocketIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'gitUrl',
      title: 'Git Url',
      type: 'url',
      validation: (rule) => rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'productionUrl',
      title: 'Production Url',
      type: 'url',
      validation: (rule) => rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'technos',
      title: 'Technos',
      type: 'array',
      of: [{type: 'string'}],
            options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: authorType.name }]
      }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      technos: 'technos',
      media: 'coverImage',
      content: 'content'
    },
    prepare({ title, technos, content, media }) {
      return { title, media, technos, subtitle: content[0].children[0].text }
    },
  },
})

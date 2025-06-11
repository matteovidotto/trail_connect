import {defineField, defineType} from 'sanity'

export const participation = defineType({
  name: 'participation',
  title: 'Iscrizione attività',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'Utente',
      type: 'reference',
      to: [{type: 'user'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'activity',
      title: 'Attività',
      type: 'reference',
      to: [{type: 'activity'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Stato iscrizione',
      type: 'string',
      initialValue: 'iscritto',
      options: {
        list: [
          {title: 'Iscritto', value: 'iscritto'},
          {title: 'Disiscritto', value: 'disiscritto'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'joinedAt',
      title: 'Data iscrizione',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
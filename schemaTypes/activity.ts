import {defineField, defineType} from 'sanity'

export const activity = defineType({
  name: 'activity',
  title: 'Attività',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Data e ora',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Luogo',
      type: 'string',
    }),
    defineField({
      name: 'activityType',
      title: 'Tipo attività',
      type: 'string',
      options: {
        list: [
          {title: 'Corsa', value: 'corsa'},
          {title: 'Trail running', value: 'trail-running'},
          {title: 'Bici da corsa', value: 'bici-da-corsa'},
          {title: 'Gravel', value: 'gravel'},
          {title: 'Mountain bike', value: 'mtb'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficoltà',
      type: 'string',
      options: {
        list: [
          {title: 'Facile', value: 'facile'},
          {title: 'Media', value: 'media'},
          {title: 'Difficile', value: 'difficile'},
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Stato',
      type: 'string',
      initialValue: 'attiva',
      options: {
        list: [
          {title: 'Attiva', value: 'attiva'},
          {title: 'Annullata', value: 'annullata'},
        ],
      },
    }),
    defineField({
      name: 'creator',
      title: 'Creatore',
      type: 'reference',
      to: [{type: 'user'}],
    }),
  ],
})
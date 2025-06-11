import {defineField, defineType} from 'sanity'

export const user = defineType({
  name: 'user',
  title: 'Utente',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'surname',
      title: 'Cognome',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'role',
      title: 'Ruolo',
      type: 'string',
      options: {
        list: [
          {title: 'Utente', value: 'utente'},
          {title: 'Admin', value: 'admin'},
        ],
      },
    }),
  ],
})
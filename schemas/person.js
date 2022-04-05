export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  fields: [{
    title: 'Full name',
    name: 'fullName',
    type: 'string',
    description: 'Please follow FirstName lastName format'
  },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'fullName',
        maxLength: 1000
      }
    },
    {
      title: 'ID',
      name: 'id',
      type: 'number'
    }
  ]
}
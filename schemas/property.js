export default {
  title: 'Property',
  name: 'property',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Property type',
      name: 'propertyType',
      type: 'string',
      options: {
        list: [
          {title: "House", value: "house"},
          {title: "Flat", value: "flat"},
        ],
        layout: "radio"
      },
    },
    {
      title: 'Beds',
      name: 'beds',
      type: 'number'
    },
    {
      title: 'Bedrooms',
      name: 'bedrooms',
      type: 'number'
    },
    {
      title: 'Price per night',
      name: 'pricePerNight',
      type: 'number',
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{type: 'propertyImage'}]
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      title: 'ID',
      name: 'id',
      type: 'number'
    },
    {
      title: 'Host',
      name: 'host',
      type: 'host'
    },
    {title: 'Review',
    name: 'review',
    type: 'array',
    of: [{type: 'review'}]}
  ]
}
export default {
  title: 'Review',
  name: 'review',
  type: 'object',
  fields: [
    {
      title: 'Review description',
      name: 'reviewDescription',
      type: 'string'
    },
    {
      title: 'Traveller',
      name: 'traveller',
      type: 'traveller'
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
      options: {
        list: [{title: '5 stars', value: 5},
          {title: '4 stars', value: 4},
          {title: '3 stars', value: 3},
          {title: '2 stars', value: 2},
          {title: '1 star', value: 1},
          {title: '0 stars', value: 0}
        ],
        layout: 'radio'
      }
    }
  ]
}
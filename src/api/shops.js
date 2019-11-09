export default {
  data: [
    {
      id: 1,
      type: 'shops',
      attributes: {
        name: 'Oxford Press',
        category_id: 1, // foreign key [matches with category.id]
        opens_at: '10:00 AM',
        closes_at: '07:00 PM',
        coordinates: {
          latitude: 47.78825,
          longitude: -122.4324,
        },
      },
    },
    {
      id: 2,
      type: 'shops',
      attributes: {
        name: 'Top Flowers',
        category_id: 2,
        opens_at: '07:00 AM',
        closes_at: '01:00 PM',
        coordinates: {
          latitude: 40.28825,
          longitude: -122.4324,
        },
      },
    },

    {
      id: 3,
      type: 'shops',
      attributes: {
        name: 'New Flowers',
        category_id: 2,
        opens_at: '06:00 AM',
        closes_at: '06:00 PM',
        coordinates: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
    },
  ],
};

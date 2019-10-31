module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'Plans',
      [
        {
          title: 'Start',
          duration: '1',
          price: '129',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Gold',
          duration: '3',
          price: '109',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Diamond',
          duration: '6',
          price: '99',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Platinum',
          duration: '12',
          price: '89',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'Students',
      [
        {
          name: 'Lucas Amancio',
          email: 'lhamancio@gmail.com',
          idade: '24',
          peso: '51',
          altura: '160',
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'Marcia Amancio',
          email: 'marciaamancio@gmail.com',
          idade: '43',
          peso: '48',
          altura: '152',
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};

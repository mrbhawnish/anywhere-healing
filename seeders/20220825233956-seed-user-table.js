module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          userName: 'Test',
          firstName: 'Test User',
          lastName: 'test User Last',
          email: "bhawnishtest@test.com",
        },
        {
          userName: 'Test2',
          firstName: 'Test User2',
          lastName: 'test User Last2',
          email: "bhawnishtest@test.com",
        },
      ],
      {
        ignoreDuplicates: true,
      }
    ),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};


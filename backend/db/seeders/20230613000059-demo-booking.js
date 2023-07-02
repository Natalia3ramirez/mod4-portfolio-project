'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Bookings';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 3,
        startDate: new Date ("2022-01-01"),
        endDate: new Date ("2022-01-11")
      },
      {
        spotId: 1,
        userId: 4,
        startDate: new Date ("2022-02-01"),
        endDate: new Date ("2022-02-11")
      },
      {
        spotId: 2,
        userId: 5,
        startDate: new Date("2023-07-01"),
        endDate: new Date ("2023-09-01")
      },
      {
        spotId: 2,
        userId: 3,
        startDate: new Date("2023-09-01"),
        endDate: new Date ("2023-09-05")
      },
      {
        spotId: 3,
        userId: 4,
        startDate: new Date("2023-08-26"),
        endDate: new Date ("2023-09-01")
      },
      {
        spotId: 3,
        userId: 3,
        startDate: new Date("2023-12-12"),
        endDate: new Date ("2023-12-22")
      },
      {
        spotId: 4,
        userId: 1,
        startDate: new Date("2023-12-01"),
        endDate: new Date ("2023-12-04")
      },
      {
        spotId: 4,
        userId: 3,
        startDate: new Date("2023-07-04"),
        endDate: new Date ("2023-07-29")
      },
      {
        spotId: 5,
        userId: 1,
        startDate: new Date("2023-07-15"),
        endDate: new Date ("2023-07-22")
      },
      {
        spotId: 5,
        userId: 5,
        startDate: new Date("2023-11-04"),
        endDate: new Date ("2023-11-05")
      },
      {
        spotId: 6,
        userId: 3,
        startDate: new Date("2023-08-27"),
        endDate: new Date ("2023-08-28")
      },
      {
        spotId: 6,
        userId: 4,
        startDate: new Date("2023-10-07"),
        endDate: new Date ("2023-10-11")
      },
      {
        spotId: 7,
        userId: 5,
        startDate: new Date("2023-11-15"),
        endDate: new Date ("2023-12-01")
      },
      {
        spotId: 7,
        userId: 1,
        startDate: new Date("2023-08-01"),
        endDate: new Date ("2023-08-04")
      },
      {
        spotId: 8,
        userId: 2,
        startDate: new Date("2023-07-10"),
        endDate: new Date ("2023-07-21")
      },
      {
        spotId: 8,
        userId: 4,
        startDate: new Date("2024-01-03"),
        endDate: new Date ("2024-01-07")
      },
      {
        spotId: 9,
        userId: 5,
        startDate: new Date("2024-02-15"),
        endDate: new Date ("2024-02-17")
      },
      {
        spotId: 10,
        userId: 1,
        startDate: new Date("2023-11-03"),
        endDate: new Date ("2023-11-04")
      },
      {
        spotId: 11,
        userId: 2,
        startDate: new Date("2024-03-01"),
        endDate: new Date ("2024-03-15")
      },

      {
        spotId: 12,
        userId: 3,
        startDate: new Date("2024-04-15"),
        endDate: new Date ("2024-04-15")
      },

      {
        spotId: 13,
        userId: 4,
        startDate: new Date("2024-03-21"),
        endDate: new Date ("2024-03-25")
      },

      {
        spotId: 14,
        userId: 1,
        startDate: new Date("2023-10-22"),
        endDate: new Date ("2023-10-24")
      },

      {
        spotId: 15,
        userId: 2,
        startDate: new Date("2024-02-03"),
        endDate: new Date ("2024-02-11")
      }


   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Bookings";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};

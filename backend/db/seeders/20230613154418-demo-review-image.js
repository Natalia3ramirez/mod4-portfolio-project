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
    options.tableName = 'ReviewImages';
    return queryInterface.bulkInsert(options, [

      {
        reviewId: 4,
        url: "https://tinyurl.com/ahp8euz3"
      },
      {
        reviewId: 7,
        url: "https://tinyurl.com/msd4wc6w"
      },
      {
        reviewId: 10,
        url: "https://tinyurl.com/2mskjs87"
      },
      {
        reviewId: 13,
        url: "https://tinyurl.com/5hd9ma93"
      },
      {
        reviewId: 16,
        url: "https://tinyurl.com/4pbeue9c"
      },
      {
        reviewId: 19,
        url: "https://tinyurl.com/4k8kt9jr"
      },
      {
        reviewId: 22,
        url: "https://tinyurl.com/3rcpcm52"
      },
      {
        reviewId: 25,
        url: "https://tinyurl.com/5n9xaxz8"
      },
      {
        reviewId: 28,
        url: "https://tinyurl.com/2axnzknt"
      },
      {
        reviewId: 31,
        url: "https://tinyurl.com/mr3m9fds"
      },
      {
        reviewId: 34,
        url: "https://tinyurl.com/4h5rzp2f"
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
    options.tableName = "ReviewImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      reviewId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};

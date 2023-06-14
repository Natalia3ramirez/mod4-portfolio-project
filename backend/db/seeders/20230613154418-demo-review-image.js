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
        reviewId: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7p9cyzfV7lgsThwDHovc3eBQw8RSnk5abaYo_2e8jRA&usqp=CAU&ec=48600113"
      },
      {
        reviewId: 2,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1A5eyyH1PoA6WLmb1SLFNaOdL31DnCZMCAduxAdAKUQ&usqp=CAU&ec=48600113"
      },
      {
        reviewId: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrgdD7mMcZ1WoGLWM4sAU_YxAj4ST0mxbAROYNAHAPg&usqp=CAU&ec=48600113"
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

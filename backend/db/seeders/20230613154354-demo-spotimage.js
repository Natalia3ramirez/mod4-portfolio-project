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
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEYhg9vBVqT2wEpffGIyUYdaQiXTOSS12CItVkgRfjA&usqp=CAU&ec=48600113",
        preview: true
      },
      {
        spotId: 2,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHr0LM0fcZml2_ZUMCaSBdZixxipDRKWiOKhOJ2wbFA&usqp=CAU&ec=48600113",
        preview: true
      },
      {
        spotId: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDmtAMQgrVIQ-Bj4piPReEIxiG1bV26Rr09TMRBWL5w&usqp=CAU&ec=48600113",
        preview: true
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
    options.tableName = "SpotImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};

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
        url: "https://tinyurl.com/nhm3xn94",
        preview: true
      },
      {
        spotId: 1,
        url: "https://tinyurl.com/Bambuda-Lodge",
        preview: false
      },
      {
        spotId: 1,
        url: "https://tinyurl.com/4ek8way2",
        preview: false
      },
      {
        spotId: 1,
        url: "https://tinyurl.com/39cfuac9",
        preview: false
      },
      {
        spotId: 1,
        url: "https://tinyurl.com/3decuw76",
        preview: false
      },
      {
        spotId: 2,
        url: "https://tinyurl.com/587mkj4f",
        preview: true
      },
      {
        spotId: 2,
        url: "https://tinyurl.com/2p8rkt8j",
        preview: false
      },
      {
        spotId: 2,
        url: "https://tinyurl.com/4djk98bw",
        preview: false
      },
      {
        spotId: 2,
        url: "https://tinyurl.com/2p874wrc",
        preview: false
      },
      {
        spotId: 2,
        url: "https://tinyurl.com/mnsvtkse",
        preview: false
      },
      {
        spotId: 3,
        url: "https://tinyurl.com/ypz78etx",
        preview: true
      },
      {
        spotId: 3,
        url: "https://tinyurl.com/4pbe2zwy",
        preview: false
      },
      {
        spotId: 3,
        url: "https://tinyurl.com/bdduf5vw",
        preview: false
      },
      {
        spotId: 3,
        url: "https://tinyurl.com/mryj62vd",
        preview: false
      },
      {
        spotId: 3,
        url: "https://tinyurl.com/skm3y8zt",
        preview: false
      },
      {
        spotId: 3,
        url: "https://tinyurl.com/3mnb4cpm",
        preview: false
      },
      {
        spotId: 4,
        url: "https://tinyurl.com/2s3n7yde",
        preview: true
      },
      {
        spotId: 4,
        url: "https://tinyurl.com/2h62rx98",
        preview: false
      },
      {
        spotId: 4,
        url: "https://tinyurl.com/23we88su",
        preview: false
      },
      {
        spotId: 4,
        url: "https://tinyurl.com/2c5x8jat",
        preview: false
      },
      {
        spotId: 4,
        url: "https://tinyurl.com/53cyj7kj",
        preview: false
      },
      {
        spotId: 5,
        url: "https://tinyurl.com/mwy4k3sa",
        preview: true
      },
      {
        spotId: 5,
        url: "https://tinyurl.com/2p9rjkvu",
        preview: false
      },
      {
        spotId: 5,
        url: "https://tinyurl.com/4z9j84au",
        preview: false
      },
      {
        spotId: 5,
        url: "https://tinyurl.com/mrrhsbuz",
        preview: false
      },
      {
        spotId: 5,
        url: "https://tinyurl.com/585b7uww",
        preview: false
      },
      {
        spotId: 6,
        url: "https://tinyurl.com/yr7z4kfy",
        preview: true
      },
      {
        spotId: 6,
        url: "https://tinyurl.com/mrx5p7se",
        preview: false
      },
      {
        spotId: 6,
        url: "https://tinyurl.com/25ma7wwb",
        preview: false
      },
      {
        spotId: 6,
        url: "https://tinyurl.com/vy6sjr9z",
        preview: false
      },
      {
        spotId: 6,
        url: "https://tinyurl.com/yx464a3f",
        preview: false
      },
      {
        spotId: 7,
        url: "https://tinyurl.com/5cz75dyk",
        preview: true
      },
      {
        spotId: 7,
        url: "https://tinyurl.com/43hkmt2a",
        preview: false
      },
      {
        spotId: 7,
        url: "https://tinyurl.com/p8zfen6v",
        preview: false
      },
      {
        spotId: 7,
        url: "https://tinyurl.com/2p9ewjbb",
        preview: false
      },
      {
        spotId: 7,
        url: "https://tinyurl.com/5583ynpk",
        preview: false
      },
      {
        spotId: 8,
        url: "https://tinyurl.com/3hfk2p7a",
        preview: true
      },
      {
        spotId: 8,
        url: "https://tinyurl.com/3dss8m85",
        preview: false
      },
      {
        spotId: 8,
        url: "https://tinyurl.com/2nj4xhm7",
        preview: false
      },
      {
        spotId: 8,
        url: "https://tinyurl.com/5erc2upw",
        preview: false
      },
      {
        spotId: 8,
        url: "https://tinyurl.com/3wu6fmrn",
        preview: false
      },
      {
        spotId: 9,
        url: "https://tinyurl.com/2m87kud6",
        preview: true
      },
      {
        spotId: 9,
        url: "https://tinyurl.com/57d34c6w",
        preview: false
      },
      {
        spotId: 9,
        url: "https://tinyurl.com/2y6ab3dy",
        preview: false
      },
      {
        spotId: 9,
        url: "https://tinyurl.com/3r38k6wh",
        preview: false
      },
      {
        spotId: 9,
        url: "https://tinyurl.com/44tu22se",
        preview: false
      },
      {
        spotId: 10,
        url: "https://tinyurl.com/3npjx9wu",
        preview: true
      },
      {
        spotId: 10,
        url: "https://tinyurl.com/bdhvkr6h",
        preview: false
      },
      {
        spotId: 10,
        url: "https://tinyurl.com/bddx3s3t",
        preview: false
      },
      {
        spotId: 10,
        url: "https://tinyurl.com/22p9536m",
        preview: false
      },
      {
        spotId: 10,
        url: "https://tinyurl.com/5akefkkj",
        preview: false
      },
      {
        spotId: 11,
        url: "https://tinyurl.com/msktpz9c",
        preview: true
      },
      {
        spotId: 11,
        url: "https://tinyurl.com/ynwx5udp",
        preview: false
      },
      {
        spotId: 11,
        url: "https://tinyurl.com/yeeuxut4",
        preview: false
      },
      {
        spotId: 11,
        url: "https://tinyurl.com/2p8p6vct",
        preview: false
      },
      {
        spotId: 11,
        url: "https://tinyurl.com/2yjkme3n",
        preview: false
      },
      {
        spotId: 12,
        url: "https://tinyurl.com/55bpavt3",
        preview: true
      },
      {
        spotId: 12,
        url: "https://tinyurl.com/5sd32bef",
        preview: false
      },
      {
        spotId: 12,
        url: "https://tinyurl.com/4puy22bk",
        preview: false
      },
      {
        spotId: 12,
        url: "https://tinyurl.com/39p6t8hx",
        preview: false
      },
      {
        spotId: 12,
        url: "https://tinyurl.com/5n6txz9n",
        preview: false
      },
      {
        spotId: 13,
        url: "https://tinyurl.com/2tv3ztwh",
        preview: true
      },
      {
        spotId: 13,
        url: "https://tinyurl.com/2fuh8f6v",
        preview: false
      },
      {
        spotId: 13,
        url: "https://tinyurl.com/ytbd3wbh",
        preview: false
      },
      {
        spotId: 13,
        url: "https://tinyurl.com/jc3dj8tw",
        preview: false
      },
      {
        spotId: 13,
        url: "https://tinyurl.com/3pmjzstd",
        preview: false
      },
      {
        spotId: 14,
        url: "https://tinyurl.com/mr3n97m3",
        preview: true
      },
      {
        spotId: 14,
        url: "https://tinyurl.com/4wwx6ewk",
        preview: false
      },
      {
        spotId: 14,
        url: "https://tinyurl.com/54uwy6s6",
        preview: false
      },
      {
        spotId: 14,
        url: "https://tinyurl.com/3w3xr95m",
        preview: false
      },
      {
        spotId: 14,
        url: "https://tinyurl.com/ypwesmd8",
        preview: false
      },
      {
        spotId: 15,
        url: "https://tinyurl.com/ymju85ue",
        preview: true
      },
      {
        spotId: 15,
        url: "https://tinyurl.com/mr3jdzka",
        preview: false
      },
      {
        spotId: 15,
        url: "https://tinyurl.com/5n7hrh82",
        preview: false
      },
      {
        spotId: 15,
        url: "https://tinyurl.com/3kapjy3d",
        preview: false
      },
      {
        spotId: 15,
        url: "https://tinyurl.com/mwssxb88",
        preview: false
      },
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

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
    options.tableName = 'Reviews';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 2,
        review: "Great experience! Incredible place in such a beautiful location. I recommend!",
        stars: 5
      },
      {
        spotId: 1,
        userId: 3,
        review: "BEAUTIFUL! I cannot wait to stay there again!",
        stars: 5
      },
      {
        spotId: 1,
        userId: 4,
        review: "Great experience! The place is really well kept and a perfect getaway",
        stars: 5
      },
      {
        spotId: 2,
        userId: 5,
        review: "The place is really nice but it is a little difficult to get to if you are carrying luggage. ",
        stars: 3
      },
      {
        spotId: 2,
        userId: 2,
        review: "Really enjoyed that it was away from everything but wish they had better food available.",
        stars: 4
      },
      {
        spotId: 2,
        userId: 3,
        review: "Just what I was looking for!",
        stars: 5
      },
      {
        spotId: 3,
        userId: 4,
        review: "Really nice garden but the rooms were not very big or spacious.",
        stars: 3
      },
      {
        spotId: 3,
        userId: 5,
        review: "Nice spot but a little to pricy for what it has to offer. Too basic.",
        stars: 3
      },
      {
        spotId: 3,
        userId: 2,
        review: "Had a great time staying here.",
        stars: 4
      },
      {
        spotId: 4,
        userId: 3,
        review: "Go slow maaan! I fell in love with Caye Caulker and its because I enjoyed my time at Bella's!",
        stars: 5
      },
      {
        spotId: 4,
        userId: 4,
        review: "Great place to relax after a day of exploring and swimming! Although I do wish it was closer to the beach.",
        stars: 4
      },
      {
        spotId: 4,
        userId: 5,
        review: "The room was great! Very clean.",
        stars: 4
      },
      {
        spotId: 5,
        userId: 1,
        review: "Bathrooms needed to be remodeled. The doors wouldn't stay closed",
        stars: 2
      },
      {
        spotId: 5,
        userId: 3,
        review: "Found many other better places for the same price",
        stars: 3
      },
      {
        spotId: 5,
        userId: 4,
        review: "Lovely place! A little basic but nice",
        stars: 4
      },
      {
        spotId: 6,
        userId: 5,
        review: "Lives up to its name...it's FUNKY",
        stars: 5
      },
      {
        spotId: 6,
        userId: 1,
        review: "Very colorful and happy place to stay. Thank you!",
        stars: 4
      },
      {
        spotId: 6,
        userId: 3,
        review: "The place was nice but lots of noise late at night.",
        stars: 3
      },
      {
        spotId: 7,
        userId: 4,
        review: "Great hotel, walking distance to everything. The service was excellent",
        stars: 5
      },
      {
        spotId: 7,
        userId: 5,
        review: "Amazing hot tub after hiking Acatenango. Very happy with our stay!",
        stars: 5
      },
      {
        spotId: 7,
        userId: 1,
        review: "Big showers and great water presssure. Quiet and clean place overall",
        stars: 5
      },
      {
        spotId: 8,
        userId: 2,
        review: "I will definitely be staying there again. SO BEAUTIFUL!",
        stars: 5
      },
      {
        spotId: 8,
        userId: 4,
        review: "The house was extraordinarily clean!",
        stars: 5
      },
      {
        spotId: 8,
        userId: 5,
        review: "This house blew my mind! Stunning home with attention to detail.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 1,
        review: "Enjoyed the pool.",
        stars: 4
      },
      {
        spotId: 9,
        userId: 2,
        review: "The bed mattress is a little hard.",
        stars: 3
      },
      {
        spotId: 9,
        userId: 4,
        review: "Really nice hotel. Perfect pool to laze around.",
        stars: 5
      },
      {
        spotId: 10,
        userId: 5,
        review: "Beautiful beachfront hotel!",
        stars: 5
      },
      {
        spotId: 10,
        userId: 1,
        review: "There was sand everywhere.",
        stars: 3
      },
      {
        spotId: 10,
        userId: 2,
        review: "Did not enjoy the sand in my bed.",
        stars: 2
      },
      {
        spotId: 11,
        userId: 3,
        review: "No soap in soap dispensers and rooms were decent",
        stars: 2
      },
      {
        spotId: 11,
        userId: 5,
        review: "One of the cheapest options in the area but you get what you pay for.",
        stars: 2
      },
      {
        spotId: 11,
        userId: 1,
        review: "Affordable stay with all the necessities!",
        stars: 4
      },
      {
        spotId: 12,
        userId: 2,
        review: "Nice place. Walking distance from the ferry",
        stars: 4
      },
      {
        spotId: 12,
        userId: 3,
        review: "Excellent place! The only thing missing was AC in the bedroom.",
        stars: 4
      },
      {
        spotId: 12,
        userId: 5,
        review: "I stayed two nights. Great experience!",
        stars: 5
      },
      {
        spotId: 13,
        userId: 1,
        review: "Decent hotel in a nice area.",
        stars: 4
      },
      {
        spotId: 13,
        userId: 2,
        review: "Enjoyed my stay. Will return.",
        stars: 4
      },
      {
        spotId: 13,
        userId: 3,
        review: "Really nice hotel with a nice atmosphere.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 4,
        review: "Perfect place to rest after a full day at the beach.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 1,
        review: "So cozy and warm. Really enjoyed my stay.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 2,
        review: "Nice place by the beach with all the necessary things.",
        stars: 4
      },
      {
        spotId: 15,
        userId: 3,
        review: "PERFECT getaway",
        stars: 5
      },
      {
        spotId: 15,
        userId: 4,
        review: "I cannot wait to stay here again! If you need to take a break and relax, this place is for you!",
        stars: 5
      },
      {
        spotId: 15,
        userId: 1,
        review: "A beautfil jewel on the island.",
        stars: 5
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
    options.tableName = "Reviews";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};

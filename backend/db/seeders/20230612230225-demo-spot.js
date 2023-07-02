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
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: "8QFP+4W Bastimentos Island",
        city: "Isla Solarte",
        state: "Bocas del Toro",
        country: "Panama",
        lat: 9.3289385,
        lng: -82.2107879,
        name: "Bambuda Lodge",
        description: "Place to chill and enjoy the island",
        price: 37.79
      },
      {
        ownerId: 1,
        address: "MQFJ+W5 Hornito",
        city: "Hornito",
        state: "Chiqiqui",
        country: "Panama",
        lat: 8.8001015,
        lng: -82.1978149,
        name: "Lost and Found",
        description: "Wlcome to the jungle. Enjoy the jungle mountains with some hiking trails",
        price: 21.99
      },
      {
        ownerId: 1,
        address: "5742+FV Uvita",
        city: "Uvita",
        state: "Puntarenas",
        country: "Costa Rica",
        lat: 9.3037387,
        lng: -83.7506594,
        name: "Blue Sunshine",
        description: "Comfortable place to rest and relax",
        price: 22.67
      },
      {
        ownerId: 2,
        address: "Traveller's Palm Street",
        city: "Caye Caulker",
        state: "Belize",
        country: "Belize",
        lat: 17.7404411,
        lng: -88.0268441,
        name: "Travellers Palm",
        description: "Cozy place near the ocean",
        price: 15.99
      },
      {
        ownerId: 2,
        address: "Avenida 9, 32 y 34 207",
        city: "Bacalar",
        state: "Quintana Roo",
        country: "Mexico",
        lat: 18.6802801,
        lng: -88.3919001,
        name: "Guarumbo",
        description: "A quiet place for people to eat, rest and meet other travellers",
        price: 25.99
      },
      {
        ownerId: 2,
        address: "12 South Side",
        city: "Hopkins",
        state: "Stann Creek",
        country: "Belize",
        lat: 18.6802809,
        lng: -88.3919008,
        name: "The Funky Dodo",
        description: "Comfortable accommodation off the coast of Belize",
        price: 13.50
      },
      {
        ownerId: 3,
        address: "2 Avenida Sur #23",
        city: "Antigua",
        state: "Sacatepéquez",
        country: "Guatemala",
        lat: 14.5530502,
        lng: -90.7310563,
        name: "Somos",
        description: "Place to rest and meet other travellers",
        price: 16.00
      },
      {
        ownerId: 3,
        address: "15 3a Calle Oriente",
        city: "Antigua",
        state: "Sacatepéquez",
        country: "Guatemala",
        lat: 14.0021293,
        lng: -90.7310231,
        name: "Placentera estadia en casco de Antigua",
        description: "Beautiful home in central location of Antigua",
        price: 205
      },
      {
        ownerId: 3,
        address: "FJW9+X37",
        city: "El Tunco",
        state: "La Libertad",
        country: "El Slavador",
        lat: 13.4982111,
        lng: -89.3822011,
        name: "Puesta del Sol",
        description: "Cozy BnB near playa El Tunco",
        price: 16.99
      },
      {
        ownerId: 4,
        address: "34V5+28Q, Calle Principal",
        city: "Utila",
        state: "Islas de la Bahia",
        country: "Honduras",
        lat: 16.0927976,
        lng: -86.8916154,
        name: "Trudy",
        description: "Rest and enjoy the ocean breeze!",
        price: 17.25
      },
      {
        ownerId: 4,
        address: "Avenida del Parque",
        city: "San Juan del Sur",
        state: "Rivas",
        country: "Nicaragua",
        lat: 11.2526388,
        lng: -85.8711925,
        name: "Casa Oro",
        description: "Beautiful place to rest and relax",
        price: 25
      },
      {
        ownerId: 4,
        address: "Del parque de moyogalpa 300 mtrs al norte",
        city: "Moyogalpa",
        state: "Rivas",
        country: "Nicaragua",
        lat: 11.5437819,
        lng: -85.6970081,
        name: "Casa Mauro",
        description: "Enjoy a beautiful terrace and garden",
        price: 20
      },
      {
        ownerId: 5,
        address: "Avenida 15 Calle 39",
        city: "San Jose",
        state: "San Jose",
        country: "Costa Rica",
        lat: 9.9378214,
        lng: -84.0603201,
        name: "TripOn Open House",
        description: "Place in central location to rest and relax!",
        price: 19.00
      },
      {
        ownerId: 5,
        address: "100m al sur y 50m este del restaurante el Coco Quality Road",
        city: "Playa Dominical del Sur",
        state: "Puntarenas",
        country: "Costa Rica",
        lat: 9.2522338,
        lng: -83.8622048,
        name: "Cool Vibes Beach",
        description: "Cozy place just a few steps from the beach!",
        price: 43.99
      },
      {
        ownerId: 5,
        address: "C. 2a, Bocas del Toro",
        city: "Bocas del Toro",
        state: "Bocas del Toro",
        country: "Panama",
        lat: 9.44723957,
        lng: -82.2805136,
        name: "Hansi",
        description: "Laid back and tropical place to get some rest",
        price: 25.99
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
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['App Academy', 'Beautiful Place', 'Home'] }
    }, {});
  }
};

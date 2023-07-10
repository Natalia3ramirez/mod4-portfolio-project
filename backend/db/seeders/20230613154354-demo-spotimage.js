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
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/8/88109/p3d5oeyf2ruob3cdcygz",
        preview: true
      },
      {
        spotId: 1,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/8/88109/fqxmall7rjvorr7frbbn",
        preview: false
      },
      {
        spotId: 1,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/8/88109/cmgg5hvaw88xrog3zvid",
        preview: false
      },
      {
        spotId: 1,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/466731507.jpg?k=62333145dcddb04f51049368d9131141dc96cc0aab4ecdfa1e50bc2be871961e&o=&hp=1",
        preview: false
      },
      {
        spotId: 1,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/267775268.jpg?k=b842c893d6e59c8e91fac5fb94e810a380836268333cb121447befea980e2090&o=&hp=1",
        preview: false
      },
      {
        spotId: 2,
        url: "https://images.squarespace-cdn.com/content/v1/5303a197e4b0c7fb3f1eabb3/1547576392352-3DCKBE2C1CCMBFWF8ZOT/DTP_0169_1%281%29.jpg?format=750w",
        preview: true
      },
      {
        spotId: 2,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/2/274751/4.jpg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://images.squarespace-cdn.com/content/v1/5303a197e4b0c7fb3f1eabb3/1547576794572-NNFLH1QHBH9JHEL03XZW/DSC07159.jpg?format=750w",
        preview: false
      },
      {
        spotId: 2,
        url: "https://images.squarespace-cdn.com/content/v1/5303a197e4b0c7fb3f1eabb3/1552842626052-S2VETJP00O5T9OKSTVW4/Private+Room+Lost+and+Found+Hostel?format=750w",
        preview: false
      },
      {
        spotId: 2,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/2/274751/19.jpg",
        preview: false
      },
      {
        spotId: 3,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/382541684.jpg?k=1d1e8ab56879a9e567e495c5e0b1c90dbc99e003e00d3f4b08d8de171fd13335&o=&hp=1",
        preview: true
      },
      {
        spotId: 3,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408846502.jpg?k=3a5604d2141980f6942bf6d0269d4d52dc0aa71e2fdd1cc14961eadc82092f9e&o=&hp=1",
        preview: false
      },
      {
        spotId: 3,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/382541666.jpg?k=5d2b9c1c30a1333ffd0df2165f18fc376b8a52e3682bcdf3622e90dff43b04da&o=&hp=1",
        preview: false
      },
      {
        spotId: 3,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/382541655.jpg?k=e8a3c8584de0506da2e24291cb8a1449cfe8c5af354e783a74a83f60a37970ed&o=&hp=1",
        preview: false
      },
      {
        spotId: 3,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/382541675.jpg?k=533a9761b89471788f874ee7927bfb8342695a010edbdf85b69dba80b7db7795&o=&hp=1",
        preview: false
      },
      {
        spotId: 4,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/64/b6/1d/traveller-s-palm.jpg?w=1200&h=-1&s=1",
        preview: true
      },
      {
        spotId: 4,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/58/7c/92/this-is-the-rooftop-of.jpg?w=1200&h=-1&s=1",
        preview: false
      },
      {
        spotId: 4,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/64/b6/1a/traveller-s-palm.jpg?w=1200&h=-1&s=1",
        preview: false
      },
      {
        spotId: 4,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/64/b6/20/kitchen-on-top-floor.jpg?w=1200&h=-1&s=1",
        preview: false
      },
      {
        spotId: 4,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/b4/e1/52/caption.jpg?w=1200&h=-1&s=1",
        preview: false
      },
      {
        spotId: 5,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206548538.jpg?k=fb37ecf3a39667afad46b8224c22464fbb54a9623db47ee3d92b12fca020a86e&o=&hp=1",
        preview: true
      },
      {
        spotId: 5,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329113990.jpg?k=f91661d7bad9b7921bc08010ccb17c271488e7c19fcf3ff2eb6fa49e143ee9fc&o=&hp=1",
        preview: false
      },
      {
        spotId: 5,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383938602.jpg?k=8dc3033f9de4a377487dbc6877c7d727f22fe5ca50c97af9654038c78c09cd9c&o=&hp=1",
        preview: false
      },
      {
        spotId: 5,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/260712141.jpg?k=0c3635cdbdb3953554f9a1a6a5d832d6fa8f5055da6b22191707c980d4fe6f23&o=&hp=1",
        preview: false
      },
      {
        spotId: 5,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/260712129.jpg?k=d38d1ba5ce47396d23b5be83a0eef9f3195a5938a950038efcf42cb003b3270e&o=&hp=1",
        preview: false
      },
      {
        spotId: 6,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/4/48394/109.jpg",
        preview: true
      },
      {
        spotId: 6,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/4/48394/115.jpg",
        preview: false
      },
      {
        spotId: 6,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/4/48394/105.jpg",
        preview: false
      },
      {
        spotId: 6,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155657725.jpg?k=150be3f74df7599e177c1ef8b6c07d42f2db9818aec5055834e8065e1e4ac096&o=&hp=1",
        preview: false
      },
      {
        spotId: 6,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/271187593.jpg?k=af64542672556b80fbd9f2db858fc31876670d91d45145adfc5afb5f05a198d4&o=&hp=1",
        preview: false
      },
      {
        spotId: 7,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/3/301830/gshwqvg1eqbstrbzbcgi",
        preview: true
      },
      {
        spotId: 7,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/3/301830/pi3faovxixq8iqn5kblx",
        preview: false
      },
      {
        spotId: 7,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/3/301830/bpzejiq3ffq0c6jarq7z",
        preview: false
      },
      {
        spotId: 7,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/3/301830/um3nglldabl6myigzziy",
        preview: false
      },
      {
        spotId: 7,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/3/301830/jczjmiq6bppkb0fm9zw7",
        preview: false
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-28959415/original/40021b35-07a2-48b0-9982-443954a7b984.jpeg?im_w=720",
        preview: true
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-28959415/original/08c89649-7295-4ecc-8df2-1c84be8fde2c.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-28959415/original/6bc41e61-ae53-4c06-a14b-8a2b260dff68.jpeg?im_w=1200",
        preview: false
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-28959415/original/72c2da23-7bc1-4c63-ba5e-41171c15f6bf.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-28959415/original/da80f028-2ef2-4b25-be76-376cdfa59642.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 9,
        url: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/205557274.jpg?k=62dbf0fa82ee8a3dbd71178c2e8cb98e80d2c4970919deb42370da4520c40c73&o=",
        preview: true
      },
      {
        spotId: 9,
        url: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/118236990.jpg?k=9f3d8e8457f63b31c05602becfcb62b0d35a40201e11ea0989ae8f8d6ee0ff37&o=",
        preview: false
      },
      {
        spotId: 9,
        url: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/204971347.jpg?k=54ecf6495a42e4e008fde38051a4e449f14c35857278087b3512167e6fab97c3&o=",
        preview: false
      },
      {
        spotId: 9,
        url: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/163128149.jpg?k=34bea68f2193bdea77784346312b2a13be282492f6ae171fddc3d2cb5af73a28&o=",
        preview: false
      },
      {
        spotId: 9,
        url: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/163128264.jpg?k=920e79f790e9fe3de11cecbf0020c3af34e50deb223d89aa648f20c370aafa20&o=",
        preview: false
      },
      {
        spotId: 10,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/83/54/74/best-place-by-far-great.jpg?w=1200&h=-1&s=1",
        preview: true
      },
      {
        spotId: 10,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/bd/d9/a1/photo2jpg.jpg?w=1200&h=-1&s=1",
        preview: false
      },
      {
        spotId: 10,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/12/a6/ae/utila.jpg?w=1200&h=-1&s=1",
        preview: false
      },
      {
        spotId: 10,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e5/00/93/trudy-s-hotel.jpg?w=1200&h=-1&s=1",
        preview: false
      },
      {
        spotId: 10,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e5/00/85/trudy-s-hotel.jpg?w=1200&h=-1&s=1",
        preview: false
      },
      {
        spotId: 11,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152619166.jpg?k=c312fe1c7ce4da0ce78218fdf623201c98a4b32d5315475d384a79f0e54635b4&o=&hp=1",
        preview: true
      },
      {
        spotId: 11,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269751203.jpg?k=f3c64366d67bc2e579730dbc37618744acd68e136ecb6a84ff9656a9c22f925b&o=&hp=1",
        preview: false
      },
      {
        spotId: 11,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152619185.jpg?k=419377d57c567d6d3bbee4e1da519af2c154c073e35108bebbc5a5c5f0eb1f4d&o=&hp=1",
        preview: false
      },
      {
        spotId: 11,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152619218.jpg?k=a77361f4416bad23f656b1bf37759521b5c57cccf60c29c9d959b0ab3a07c1ec&o=&hp=1",
        preview: false
      },
      {
        spotId: 11,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/145998448.jpg?k=e7243ac1a69574a67bc89f8c739a68c3bf7e4f062b984a6974332cf65ee82b5f&o=&hp=1",
        preview: false
      },
      {
        spotId: 12,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/207071427.jpg?k=a6d6ee6dd26edceccf9af4817326b31feef4de6ec47bb1e2e136c87b7bb46248&o=&hp=1",
        preview: true
      },
      {
        spotId: 12,
        url: "https://cf.bstatic.com/xdata/images/hotel/max200/406240651.jpg?k=d350bdf60b360cd8c4552a31f00f965a3178523eeb89e32806e4e62fe4237ea5&o=&hp=1",
        preview: false
      },
      {
        spotId: 12,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/207071293.jpg?k=dc55630991a2543d235ffa95e16d7f5901d3464d0f8524333f4fc9e79c9db8ce&o=&hp=1",
        preview: false
      },
      {
        spotId: 12,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/419081991.jpg?k=5e2829c2675af95efd0ccdb5625159be2e4906c2e9e98b469f732688fa59ca9c&o=&hp=1",
        preview: false
      },
      {
        spotId: 12,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/207071445.jpg?k=111b6744dce9b1a5ce0d54ce242594f837a63002c3a31d6ed23aa582955e702f&o=&hp=1",
        preview: false
      },
      {
        spotId: 13,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/9/93293/243.jpg",
        preview: true
      },
      {
        spotId: 13,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/9/93293/246.jpg",
        preview: false
      },
      {
        spotId: 13,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/9/93293/247.jpg",
        preview: false
      },
      {
        spotId: 13,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/9/93293/256.jpg",
        preview: false
      },
      {
        spotId: 13,
        url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/9/93293/277.jpg",
        preview: false
      },
      {
        spotId: 14,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/316755389.jpg?k=a8c5cd10b4b46ab00647c86705d7a75b28b75a522f050d387c2880519a54c538&o=&hp=1",
        preview: true
      },
      {
        spotId: 14,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/316755413.jpg?k=7b8f028192ebfd2c8aeac1cc9761c58ad685d5be88cb43e5b01141a06413adc0&o=&hp=1",
        preview: false
      },
      {
        spotId: 14,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/316755407.jpg?k=bf2ded33fc3b92b467395d9dd7d83c840e10f97b436acd215cc4b7628911de1c&o=&hp=1",
        preview: false
      },
      {
        spotId: 14,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/316755363.jpg?k=59c8b77542ed8c12fe8361e7f3e834e111949541514a15f16644a160a1dbacad&o=&hp=1",
        preview: false
      },
      {
        spotId: 14,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/316755393.jpg?k=748140d309866d7eebfda3693c560e20705b0d2dae9d69829eb60f9892cecaab&o=&hp=1",
        preview: false
      },
      {
        spotId: 15,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e9/c9/de/hostal-hansi.jpg?w=1200&h=-1&s=1",
        preview: true
      },
      {
        spotId: 15,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ab/03/eb/outside-area.jpg?w=1100&h=-1&s=1",
        preview: false
      },
      {
        spotId: 15,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ab/04/03/shared-kitchen.jpg?w=1100&h=-1&s=1",
        preview: false
      },
      {
        spotId: 15,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ab/03/f0/outside-area.jpg?w=1100&h=-1&s=1",
        preview: false
      },
      {
        spotId: 15,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ab/03/fb/common-area.jpg?w=1100&h=-1&s=1",
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

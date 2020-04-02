export const films = [
  {
    id: 1,
    bgImage: `/bg-image`,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Crime`,
    released: 2000,
    preview: [
      {
        src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        type: `video/mp4`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        type: `video/webm`
      }
    ],
    isFavorite: false,
    rating: 1,
    director: `blah`,
    scoresCount: 3,
    description: `blah`,
    starring: [
      `blah`, `blah-blah`
    ],
    runTime: 123
  },
  {
    id: 2,
    bgImage: `/bg-image`,
    name: `Bohemian Rhapsody`,
    poster: `img/bohemian-rhapsody.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Romance`,
    released: 2000,
    preview: [
      {
        src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        type: `video/mp4`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        type: `video/webm`
      }
    ],
    isFavorite: false,
    rating: 1,
    director: `blah`,
    scoresCount: 3,
    description: `blah`,
    starring: [
      `blah`, `blah`
    ]
  },
  {
    id: 3,
    bgImage: `/bg-image`,
    name: `Macbeth`,
    poster: `img/macbeth.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Horror`,
    released: 2000,
    preview: [
      {
        src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        type: `video/mp4`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        type: `video/webm`
      }
    ],
    isFavorite: false,
    rating: 1,
    director: `blah`,
    scoresCount: 3,
    description: `blah`,
    starring: [
      `blah`, `blah`
    ]
  },
  {
    id: 4,
    bgImage: `/bg-image`,
    name: `Aviator`,
    poster: `img/aviator.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Dramas`,
    released: 2000,
    preview: [
      {
        src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        type: `video/mp4`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        type: `video/webm`
      }
    ],
    isFavorite: false,
    rating: 1,
    director: `blah`,
    scoresCount: 3,
    description: `blah`,
    starring: [
      `blah`, `blah`
    ]
  },
  {
    id: 5,
    bgImage: `/bg-image`,
    bgColor: `#fff`,
    name: `We need to talk about Kevin`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Documentary`,
    released: 2000,
    preview: [
      {
        src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        type: `video/mp4`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        type: `video/webm`
      }
    ],
    isFavorite: false,
    rating: 1,
    director: `blah`,
    scoresCount: 3,
    description: `blah`,
    starring: [
      `blah`, `blah`
    ],
    runTime: 123
  },
];

/* eslint-disable camelcase */
export const filmByServer = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  poster_image: `img/the-grand-budapest-hotel-poster.jpg`,
  preview_image: `img/the-grand-budapest-hotel.jpg`,
  background_image: `img/the-grand-budapest-hotel-bg.jpg`,
  background_color: `#ffffff`,
  video_link: `https://some-link`,
  preview_video_link: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scores_count: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  run_time: 99,
  genre: `Comedy`,
  released: 2014,
  is_favorite: false,
};

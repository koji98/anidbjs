module.exports = {
  id: 357,
  ageRestricted: false,
  type: 'TV Series',
  episodeCount: 1,
  startDate: '1970-01-01',
  endDate: undefined,
  titles: [
    { title: 'Test Anime', language: 'x-jat', type: 'main' },
    { title: 'test`blubb', language: 'x-jat', type: 'synonym' },
    { title: 'ンート', language: 'ja', type: 'official' }
  ],
  description:
    'test`blub\norlynow?\nspoiler in anime desc test\ncode in spoiler in anime desc test\ncode outside spoiler in anime desc test',
  picture: '3070.jpg',
  ratings: {
    permanent: { score: '5.49', count: '214' },
    temporary: { score: '6.18', count: '265' },
    review: { score: '5.09', count: '7' }
  },
  recommendations: [
    {
      type: 'For Fans',
      uid: 311037,
      content:
        'I watched this on Netflix. 5/7 would re-sub to HBO just to watch the next season.'
    },
    {
      type: 'Must See',
      uid: 315968,
      content: 'i love that scene where the lion appears'
    },
    { type: 'Must See', uid: 126925, content: '[approved]' },
    {
      type: 'Must See',
      uid: 263840,
      content: 'Turns out it was all a dream!'
    }
  ],
  url: 'http://www.mushi-pro.co.jp/2010/08/pipiピピ-とべないホタル/',
  creators: [{ id: 1249, type: 'Original Work', name: 'Test Creator Person' }],
  resources: [
    {
      type: 6,
      externalEntity: [{ ids: ['Test_method'], url: undefined }]
    }
  ],
  tags: [
    {
      id: 30,
      parentId: undefined,
      weight: 0,
      localSpoiler: false,
      globalSpoiler: false,
      name: 'meta tags',
      description: 'These tags are used for maintenance.',
      pictureUrl: undefined,
      updatedAt: '2014-09-10'
    },
    {
      id: 6222,
      parentId: 30,
      weight: 600,
      localSpoiler: false,
      globalSpoiler: false,
      name: 'test tag',
      description: 'Test http://anidb.net/t6222 [tag].',
      pictureUrl: '2247.gif',
      updatedAt: '2017-09-01'
    }
  ],
  characters: [
    {
      id: 70472,
      type: 'main character in',
      updatedAt: '2017-07-21',
      rating: 10,
      votes: 1,
      name: 'Test Character Female',
      gender: 'female',
      characterType: { id: 1, name: 'Character' },
      description: 'http://anidb.net/ch83058 [aa]',
      picture: '182624.jpg',
      seiyuu: []
    },
    {
      id: 78650,
      type: 'main character in',
      updatedAt: '2016-06-01',
      rating: 1.03,
      votes: 1,
      name: 'Test Character Male',
      gender: 'male',
      characterType: { id: 1, name: 'Character' },
      description:
        '* list item 1\n\n* list item 2\n\n* unordered list item 1\n\n* unordered list item 2\n\n* ordered list item 1\n\n* ordered list item 2\n\nunordered without "li" 1\nunordered without "li" 2\nordered without "li" 1\nordered without "li" 2',
      picture: '61862.png',
      seiyuu: []
    },
    {
      id: 81061,
      type: 'appears in',
      updatedAt: '2016-03-21',
      rating: null,
      votes: null,
      name: 'Gai - Test Character',
      gender: 'male',
      characterType: { id: 1, name: 'Character' },
      description:
        'TEST CHARACTER\n[hr]Gai is a large but good-natured guy, he was part of Benkei`s group when they ventured to the outside world after 13 years. After Benkei is injured by Invaders, he becomes pilot of Shin Getter-3. He is friends with Kei and seems to have a small crush on her. Gai is based on the character of Gai Daido from Getter Robo Go, but is different aside from appearance.',
      picture: '82082.jpg',
      seiyuu: []
    }
  ],
  episodes: [
    {
      id: 95304,
      updatedAt: '2017-12-07',
      episodeNumber: '1',
      type: 1,
      length: 25,
      airDate: undefined,
      rating: 8.46,
      votes: 4,
      titles: [
        { title: 'Please don`t go and remove this.', language: 'en' },
        { title: 'Der Dumme und sein Köter', language: 'de' },
        {
          title: 'Сказка об Иване-дураке и его двух братьях',
          language: 'ru'
        }
      ]
    },
    {
      id: 95960,
      updatedAt: '2008-12-29',
      episodeNumber: '2',
      type: 1,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [
        { title: 'Episode 2', language: 'en' },
        { title: 'owari to hajimari', language: 'x-jat' }
      ]
    },
    {
      id: 95961,
      updatedAt: '2014-09-17',
      episodeNumber: '3',
      type: 1,
      length: 3,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [{ title: 'Episode 3,3', language: 'en' }]
    },
    {
      id: 95962,
      updatedAt: '2014-10-01',
      episodeNumber: '5',
      type: 1,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [{ title: 'Episode 5', language: 'en' }]
    },
    {
      id: 96884,
      updatedAt: '2014-10-01',
      episodeNumber: '4',
      type: 1,
      length: 4,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [
        { title: 'Test Edit', language: 'en' },
        {
          title: 'Eine Schallplatte für ein Königreich',
          language: 'de'
        }
      ]
    },
    {
      id: 108198,
      updatedAt: '2009-09-02',
      episodeNumber: 'T1',
      type: 4,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [{ title: 'Episode T1', language: 'en' }]
    },
    {
      id: 108200,
      updatedAt: '2017-12-07',
      episodeNumber: '6',
      type: 1,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [{ title: 'Episode 6', language: 'en' }]
    },
    {
      id: 108201,
      updatedAt: '2017-12-07',
      episodeNumber: 'C2',
      type: 3,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [{ title: 'Ending 1b', language: 'en' }]
    },
    {
      id: 108202,
      updatedAt: '2017-12-07',
      episodeNumber: 'C1',
      type: 3,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [{ title: 'Ending 1a', language: 'en' }]
    },
    {
      id: 108203,
      updatedAt: '2017-07-05',
      episodeNumber: 'S2',
      type: 2,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [{ title: 'test3', language: 'en' }]
    },
    {
      id: 123029,
      updatedAt: '2017-12-07',
      episodeNumber: '7',
      type: 1,
      length: 15,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [
        { title: 'Asdf', language: 'ja' },
        { title: 'Episode 7', language: 'en' },
        { title: 'Aaaa', language: 'de' },
        { title: 'Er', language: 'ko' }
      ]
    },
    {
      id: 123030,
      updatedAt: '2017-12-07',
      episodeNumber: '8',
      type: 1,
      length: 15,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [
        { title: 'Bsdf', language: 'ja' },
        { title: 'Episode 8', language: 'en' },
        { title: 'Bbbb', language: 'de' },
        { title: 'Fr', language: 'ko' }
      ]
    },
    {
      id: 136229,
      updatedAt: '2017-12-07',
      episodeNumber: '10',
      type: 1,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [
        { title: 'test2', language: 'ja' },
        { title: 'test', language: 'en' },
        { title: 'test1', language: 'x-jat' }
      ]
    },
    {
      id: 162675,
      updatedAt: '2017-07-05',
      episodeNumber: 'S3',
      type: 2,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [
        { title: 'S2 Test???', language: 'ja' },
        { title: 'S2 Test?', language: 'en' },
        { title: 'S2 Test??', language: 'x-jat' }
      ]
    },
    {
      id: 164116,
      updatedAt: '2014-11-15',
      episodeNumber: 'T2',
      type: 4,
      length: 0,
      airDate: undefined,
      rating: null,
      votes: null,
      titles: [{ title: 'Trailer add test', language: 'en' }]
    }
  ]
}

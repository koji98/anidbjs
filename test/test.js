/* eslint-disable */
const should = require('should');
const objectDiff = require('objectdiff');
const fs = require('fs');
const AniDb = require('../lib/anidb');

const toEqualOwnProperties = function toEqualOwnProperties(expected, actual) {
  const diff = objectDiff.diffOwnProperties(expected, actual);
  if (diff.changed !== 'equal') {
    throw new Error(JSON.stringify(diff));
  }
};

describe('AniDb: Anime', _ => {
  const client = new AniDb({ client: 'anidbjs', version: 2 });

  let returnFile = '';
  client.request = async _ => fs.readFileSync(returnFile, { encoding: 'utf8' });

  it('Should fail when providing insufficient arguments', done => {
    (_ => {
      new AniDb();
    }).should.throw();
    done();
  });

  it('Random recommendation should give expected result', done => {
    returnFile = './test/data/randomRecommendation.xml';

    client.randomRecommendation().then(anime => {
      const expected = require('./expected/randomRecommendation.js');
      toEqualOwnProperties(anime, expected);
      done();
    });
  });

  it('Anime 01 should give expected result', done => {
    returnFile = './test/data/anime_01.xml';

    client.anime(1).then(anime => {
      const expected = require('./expected/anime_01.js');
      toEqualOwnProperties(anime, expected);
      done();
    });
  });

  it('Anime 2322 should give expected result', done => {
    returnFile = './test/data/anime_2322.xml';

    client.anime(2322).then(anime => {
      const expected = require('./expected/anime_2322.js');
      toEqualOwnProperties(anime, expected);
      done();
    });
  });

  it('Anime 11021 should give expected result', done => {
    returnFile = './test/data/anime_11021.xml';

    client.anime(11021).then(anime => {
      const expected = require('./expected/anime_11021.js');
      toEqualOwnProperties(anime, expected);
      done();
    });
  });

  it.skip('Anime 357 should return a successfull response', done => {
    const realClient = new AniDb(
      { client: 'anidbjs', version: 2 },
      { headers: { 'User-Agent': 'anidbjs-test' } },
    );

    // realClient.proxy = 'http://110.232.83.115:8080'

    realClient.anime(357).then(anime => {
      const expected = require('./expected/anime_357.js');
      toEqualOwnProperties(anime, expected);
      done();
    });
  }).timeout(10000);
});

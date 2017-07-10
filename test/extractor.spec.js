var assert = require('assert')
  , _ = require('lodash')
  , extractor = require('../lib/extractor')
  , mockData = require('./mockData/au');

describe('Extractor', function () {
  it('throws an error when arguments are incorrect', function (done) {
    extractor.getCandidates(
      mockData.realText1
    )

    .then(done)

    .catch(function (e) {
      assert(_.isError(e), 'Result should be an Error type');
      done();
    })
  })
})

var expect = require('expect.js');
var Xikitita = require('../../temp/xikitita.js');

describe('Inflection', function() {
  
  before(function() {
    Xikitita
      .init
      .Inflection(function(){
        irregular('fish', 'fish');
        irregular('person', 'people');
      });
  });

  it('#irregular', function () {
    expect('fish'.pluralize).to.be('fish');
    expect('person'.pluralize).to.be('people');

    expect('fish'.singularize).to.be('fish');
    expect('people'.singularize).to.be('person');
  });
  
});
var expect = require('expect.js');
var EloquentJs = require('../../app/models/eloquent_js_model.js');
EloquentJs
  .Model('User', function(){
    attrAccessible('email', 'cliente');
  })
  .Model('Cliente', function(){
    attrAccessible('name', 'phone');
  });

describe('EloquentJs', function() {

  describe('Model', function() {

    it('create', function () {
      expect(User.name).to.be('User');
      expect(Cliente.name).to.be('Cliente');
    });

    it('save', function () {
      var modelNames = EloquentJs.models.map(function(model){
        return model.name;
      });

      expect(modelNames.join(', ')).to.be('User, Cliente');
    });

    it('#toJson', function () {
      expect(new User().toJson).to.be('{"email":null,"cliente":null}');
      expect(new Cliente().toJson).to.be('{"name":null,"phone":null}');
    });

  });

});
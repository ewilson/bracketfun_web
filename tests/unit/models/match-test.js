import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('match', 'Match', {
  // Specify the other units that are required for this test.
  needs: ['model:tournament', 'model:entry']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

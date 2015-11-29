import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('tournament', 'Tournament', {
  // Specify the other units that are required for this test.
  needs: ['model:player', 'model:match', 'model:entry']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:tournaments/setup', 'TournamentsSetupController', {
  // Specify the other units that are required for this test.
  needs: ['controller:players']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

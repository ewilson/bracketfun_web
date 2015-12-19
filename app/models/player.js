import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  entries: DS.hasMany('entry', {async: true}),
});

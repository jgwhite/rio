import Ember from 'ember';
import ajax from 'ember-ajax';

export default Ember.Route.extend({
  model({ id }) {
    return ajax(`/api/v1/medals/${id}`);
  }
});
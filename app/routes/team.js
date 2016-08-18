import Ember from 'ember';
import service from 'ember-service/inject';

export default Ember.Route.extend({
  api: service(),

  model({ id }) {
    return this.get('api').fetch(`/api/medals/${id}`);
  },

  renderTemplate() {
    this._super(...arguments);
    this.render('team-header', { outlet: 'header' });
  }
});

import Ember from 'ember';
import service from 'ember-service/inject';

export default Ember.Route.extend({
  api: service(),

  model() {
    return this.get('api').fetch('/api/medals');
  },

  renderTemplate() {
    this._super(...arguments);
    this.render('teams-header', { outlet: 'header' });
  }
});

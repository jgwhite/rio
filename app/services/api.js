import Service from 'ember-service';
import ajax from 'ember-ajax';
import RSVP from 'rsvp';

export default Service.extend({

  init() {
    this._cache = {};
  },

  fetch(url) {
    return this._cache[url] = this._cache[url] || ajax(url);
  }

});

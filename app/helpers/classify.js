import { helper } from 'ember-helper';
import { classify } from 'ember-string';

export default helper(([s]) => classify(s));

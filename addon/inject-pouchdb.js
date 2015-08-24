
import Ember from 'ember';
import { Pouch } from 'ember-cli-use-pouchdb-shim';
import recommendedAdapter from './recommended-adapter';

const { computed, typeOf, assert }  = Ember;

export default function (options) {
	if (options && typeOf(options) === 'string') {
		return null;
	} else {
		return computed(function () {

			let parameters = {
				adapter: recommendedAdapter(this.get('container'))
			};
			Ember.merge(parameters, options);
			assert("name has to be set", !!parameters.name);

			return new Pouch(parameters);
		});
	}
}

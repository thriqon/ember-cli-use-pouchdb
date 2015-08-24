
import Ember from 'ember';

const { testing } = Ember;

export default function (container) {
	let config = container.lookupFactory('config:environment');
	let addonConfig = (config ? (config['ember-cli-use-pouchdb'] || {}) : {});

	switch (true) {
		case (testing && addonConfig['useMemoryAdapterInTests'] !== false):
			return 'memory';
		default:
			return null;
	}
}

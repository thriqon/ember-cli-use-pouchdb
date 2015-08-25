
import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';
import { injectPouchDB } from 'ember-cli-use-pouchdb';

moduleFor('template:application', 'Integration | Injection');

test('it uses memory in test mode', function (assert) {
	this.registry.register('obj:test', Ember.Object.extend({
		db: injectPouchDB({name: 'test1'})
	}));

	var subject = this.container.lookup('obj:test');
	assert.equal(subject.get('db').adapter, 'memory');
});

test('it leaves the choice of adapter to PouchDB in test mode when configured to not use recommended adapter', function (assert) {
	this.registry.register('config:environment', {
		'ember-cli-use-pouchdb': {
			'useMemoryAdapterInTests': false
		}
	});
	this.registry.register('obj:test', Ember.Object.extend({
		db: injectPouchDB({name: 'test1'})
	}));

	var subject = this.container.lookup('obj:test');
	assert.ok(subject.get('db').adapter);
});

test('it doesn\' use memory even when in test mode when explicitly set', function (assert) {
	this.registry.register('obj:test', Ember.Object.extend({
		db: injectPouchDB({adapter: 'idb', name: 'test1'})
	}));

	var subject = this.container.lookup('obj:test');
	assert.notEqual(subject.get('db').adapter, 'memory');
});

test('the injected value is a PouchDB instance', function (assert) {
	this.registry.register('obj:test', Ember.Object.extend({
		db: injectPouchDB({name: 'test1'})
	}));

	var subject = this.container.lookup('obj:test');
	assert.equal(subject.get('db').prefix, "_pouch_");
});

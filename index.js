/* jshint node: true */
'use strict';


module.exports = {
	name: 'ember-cli-use-pouchdb',

	included: function (app, parentAddon) {
		this._super.included(app, parentAddon);
		var target = parentAddon || app;

		target.import(target.bowerDirectory + "/es5-shim/es5-shim.js", {
			type: 'vendor'
		});

		var options = app.options['ember-cli-use-pouchdb'];
		var defaultPlugins = ['memory'];
		var plugins = (options && options.plugins ? options.plugins : defaultPlugins);

		target.import(target.bowerDirectory + '/pouchdb/dist/pouchdb.js', {
			type: 'vendor'
		});

		var pluginScope = (plugins === defaultPlugins ? 'test' : 'vendor');

		plugins.forEach(function (p) {
			target.import(target.bowerDirectory + '/pouchdb/dist/pouchdb.' + p + '.js', {
				type: pluginScope
			});
		});

		target.import('vendor/ember-cli-use-pouchdb/shim.js', {
			type: 'vendor',
			exports: {
				'ember-cli-use-pouchdb-shim': [
					'Pouch'
				]
			}
		});
	}
};

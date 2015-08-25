module.exports = {
	description: 'Installing PouchDB dependency',

	normalizeEntityName: function () {},

	afterInstall: function () {
		return this.addBowerPackagesToProject(['es5-shim', 'pouchdb']);
	}
};

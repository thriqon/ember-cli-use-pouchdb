module.exports = {
	description: 'Installing PouchDB dependency',

	normalizeEntityName: function () {},

	afterInstall: function () {
		return this.addBowerPackageToProject('pouchdb');
	}
};

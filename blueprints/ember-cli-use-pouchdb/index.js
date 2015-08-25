module.exports = {
	description: 'Installing PouchDB dependency',

	normalizeEntityName: function () {},

	afterInstall: function () {
		var self = this;
		return this.addBowerPackageToProject("es5-shim")
			.then(function () { return self.addBowerPackageToProject('pouchdb'); });
	}
};

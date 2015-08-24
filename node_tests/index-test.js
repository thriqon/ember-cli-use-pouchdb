
var chai = require('chai');
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

var index = require('../index');

describe('the index file', function () {
	it('has a name', function () {
		index.name.should.be.a.String;
	});
	it('has an included hook', function () {
		index.included.should.be.a.Function;
	});

	describe('the included hook', function () {
		beforeEach(function () {
			this.app = {};
			this.app.import = sinon.spy();
			this.app.options = {};
			this.app.bowerDirectory = "bowers";
			this.context = {
				_super: {included: sinon.spy()}
			};
		});

		describe('when called without options', function () {
			it('imports the main componnent in scope vendor', function () {
				index.included.call(this.context, this.app);
				this.app.import.should.have.been.calledWith("bowers/pouchdb/dist/pouchdb.js", {type: 'vendor'});
			});
			it('imports the memory plugin in scope test', function () {
				index.included.call(this.context, this.app);
				this.app.import.should.have.been.calledWith("bowers/pouchdb/dist/pouchdb.memory.js", {type: 'test'});
			});
			it('imports the shim in scope vendor', function () {
				index.included.call(this.context, this.app);
				this.app.import.should.have.been.calledWith("vendor/ember-cli-use-pouchdb/shim.js", {
					type: 'vendor',
					exports: {
						'ember-cli-use-pouchdb-shim': ['Pouch']
					}
				});
			});
		});
		describe('when setting plugins to ["localStorage", "memory"]', function () {
			beforeEach(function () {
				this.app.options['ember-cli-use-pouchdb'] = {plugins: ['localStorage', 'memory']};
			});
			it('imports the main componnent in scope vendor', function () {
				index.included.call(this.context, this.app);
				this.app.import.should.have.been.calledWith("bowers/pouchdb/dist/pouchdb.js", {type: 'vendor'});
			});
			it('imports the memory plugin in scope vendor', function () {
				index.included.call(this.context, this.app);
				this.app.import.should.have.been.calledWith("bowers/pouchdb/dist/pouchdb.memory.js", {type: 'vendor'});
			});
			it('imports the localStorage plugin in scope vendor', function () {
				index.included.call(this.context, this.app);
				this.app.import.should.have.been.calledWith("bowers/pouchdb/dist/pouchdb.localStorage.js", {type: 'vendor'});
			});
			it('imports the shim in scope vendor', function () {
				index.included.call(this.context, this.app);
				this.app.import.should.have.been.calledWith("vendor/ember-cli-use-pouchdb/shim.js", {
					type: 'vendor',
					exports: {
						'ember-cli-use-pouchdb-shim': ['Pouch']
					}
				});
			});
		});
	});
});

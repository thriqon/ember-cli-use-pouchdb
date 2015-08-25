# Ember-cli-use-pouchdb

- import PouchDB (optionally with plugins)
- inject configured instance via helper in objects:

```javascript
import { injectPouchDB } from 'ember-cli-use-pouchdb';

export default Ember.Route.extend({
  db: injectPouchDB({name: 'test'})
});
```

- use `memory` adapter by default when in testing

## Installation

`ember install ember-cli-use-pouchdb`

## Usage

Import the helper: `import { injectPouchDB } from 'ember-cli-use-pouchdb';`

**If** used by a container object (i.e. not created via `.create()`) and
**if** instantiated in testing mode, the addon will select the `memory` adapter
of PouchDB by default, to isolate your testing data from your development data.
This can be overriden by setting
`ember-cli-use-pouchdb.useMemoryAdapterInTests` to false in the environment config.

Additional plugins can be installed by setting `ember-cli-use-pouchdb.plugins`
in `ember-cli-build.js` (!!!) to an array of plugins (see [Browser
    adapters](http://pouchdb.com/adapters.html) for available plugins). Note
that the addon does not automatically add the `memory` adapter, so unless you
set the option from above to `false` you should have the `memory` adapter in
there.

## Developers: Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

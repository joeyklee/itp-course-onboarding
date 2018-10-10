const assert = require('assert');
const app = require('../../src/app');

describe('\'list\' service', () => {
  it('registered the service', () => {
    const service = app.service('list');

    assert.ok(service, 'Registered the service');
  });
});

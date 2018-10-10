const assert = require('assert');
const app = require('../../src/app');

describe('\'courses\' service', () => {
  it('registered the service', () => {
    const service = app.service('courses');

    assert.ok(service, 'Registered the service');
  });
});

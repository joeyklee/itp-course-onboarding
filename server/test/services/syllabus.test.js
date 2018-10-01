const assert = require('assert');
const app = require('../../src/app');

describe('\'syllabus\' service', () => {
  it('registered the service', () => {
    const service = app.service('syllabus');

    assert.ok(service, 'Registered the service');
  });
});

const { authenticate } = require('@feathersjs/authentication').hooks;
const populateSection = require('../../hooks/populate-section');

module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [populateSection()],
    update: [populateSection()],
    patch: [populateSection()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

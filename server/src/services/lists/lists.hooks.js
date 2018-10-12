const { authenticate } = require('@feathersjs/authentication').hooks;
const populateList = require('../../hooks/populate-list');
// authenticate('jwt')
module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [],
    update: [populateList()],
    patch: [populateList()],
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

// Initializes the `syllabus` service on path `/syllabus`
const createService = require('feathers-mongoose');
const createModel = require('../../models/syllabus.model');
const hooks = require('./syllabus.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/syllabus', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('syllabus');

  service.hooks(hooks);
};

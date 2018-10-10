// Initializes the `sections` service on path `/sections`
const createService = require('feathers-mongoose');
const createModel = require('../../models/sections.model');
const hooks = require('./sections.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sections', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sections');

  service.hooks(hooks);
};

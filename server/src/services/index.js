const courses = require('./courses/courses.service.js');
const users = require('./users/users.service.js');
const resources = require('./resources/resources.service.js');
const sections = require('./sections/sections.service.js');
const lists = require('./lists/lists.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(courses);
  app.configure(users);
  app.configure(resources);
  app.configure(sections);
  app.configure(lists);
};

// sections-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const uniqueArrayPlugin = require('mongoose-unique-array');


module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const sections = new Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    url: { type: String, required: false },
    resources: [{ type: Schema.Types.ObjectId, ref: 'resources', unique:true }]
  }, {
    timestamps: true
  });

  // Add the unique array plugin
  sections.plugin(uniqueArrayPlugin);
  return mongooseClient.model('sections', sections);
};

// sections-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const sections = new Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    url: { type: String, required: false },
    resources: [{ type: Schema.Types.ObjectId, ref: 'resources' }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('sections', sections);
};

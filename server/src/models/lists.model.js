// lists-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const lists = new Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    url: { type: String, required: false },
    sections:[{ type: Schema.Types.ObjectId, ref: 'sections', unique:true }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('lists', lists);
};

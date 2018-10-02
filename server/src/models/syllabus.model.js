// syllabus-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const syllabus = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructorName:{ type: String, required: true },
    instructorUrl:{ type: String, required: true },
    courseWebsite:{ type: String, required: true },
    officeHours:{ type: String, required: false },
    officeHoursCalendar:{ type: String, required: false },
    courseMaterial:{type:Array, required:false},
    userId:{ type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('syllabus', syllabus);
};

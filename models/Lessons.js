const mongoose = require("mongoose");

const LessonSchema = new mongoose.Mongoose.Schema({
  lesson: {
    type: String,
  },
  video: {
    type: String,
  },
});

module.exports = mongoose.model("lesson", LessonSchema);

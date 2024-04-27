// models/Course.js

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Course = mongoose.model('Courses', courseSchema);

module.exports = Course;

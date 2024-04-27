const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  file: {
    type: String, //URL
    required: true,
  },
});

const event = mongoose.model('Event', eventSchema);

module.exports = event;
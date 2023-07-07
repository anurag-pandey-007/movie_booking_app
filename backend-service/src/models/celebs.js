const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'non-binary'],
    required: true,
  },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema,'Celebrity');

module.exports = Celebrity;

const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please add a name']
  }
});

module.exports = mongoose.model('Person', personSchema);

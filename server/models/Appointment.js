const { Schema } = require("mongoose");

const appointSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  day: {
    type: String,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
  time: {
    type: String,
  },
});

module.exports = appointSchema;

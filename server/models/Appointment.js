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
  date: {
    type: String,
  },
  time: {
    type: String,
  },
});

module.exports = appointSchema;

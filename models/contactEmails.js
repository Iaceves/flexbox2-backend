const { Schema } = require("mongoose");

const contactEmailsSchema = new Schema({
  email: { type: String, required: true },
  contactQuestions: { type: String, required: true },
});

module.exports = contactEmailsSchema;

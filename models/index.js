const mongoose = require("mongoose");
const userSchema = require("../models/user");
const contactEmailsSchema = require("../models/contactEmails");

const User = mongoose.model("User", userSchema);
const ContactEmail = mongoose.model("ContactUsEmail", contactEmailsSchema);

module.exports = { User, ContactEmail };

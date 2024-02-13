const db = require("../db");
const { ContactEmailsSchema } = require("../models/contactEmails");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const emails = async () => {
  const Email1 = await new ContactEmailsSchema({
    email: "Juan3@gmail.com",
    text: "Can your company resolve coder problems?",
  });
  Email1.save();

  const Email2 = await new ContactEmailsSchema({
    email: "mark1@gmail.com",
    text: "How fast can your build a working website?",
  });
  Email2.save();

  const Email3 = await new ContactEmailsSchema({
    email: "luisa6@gmail.com",
    text: "Can you create a website for me in the next 6 months?",
  });
  Email3.save();
};

const run = async () => {
  await emails();
};

run();

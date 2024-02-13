const db = require("../db");
const { ContactEmail } = require("../models/index");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const emails = async () => {
  const Email1 = await new ContactEmail({
    email: "Juan3@gmail.com",
    contactQuestions: "Can your company resolve coder problems?",
  });
  Email1.save();

  const Email2 = await new ContactEmail({
    email: "mark1@gmail.com",
    contactQuestions: "How fast can your build a working website?",
  });
  Email2.save();

  const Email3 = await new ContactEmail({
    email: "luisa6@gmail.com",
    contactQuestions: "Can you create a website for me in the next 6 months?",
  });
  Email3.save();
};

const run = async () => {
  await emails();
};

run();

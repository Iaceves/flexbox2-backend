const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const db = require("./db");
const logger = require("morgan");

const userController = require("./controllers/userController");
const contactController = require("./controllers/contactUsController");

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// users
app.get("/users", userController.getAllUsers);
app.get("/user/:id", userController.getOneUser);
app.post("/user", userController.createNewUser);
app.put("/user/:id", userController.updateUser);
app.delete("/user/:id", userController.deleteUser);

// contacts
app.get("/contactUs", contactController.getAllContactEmails);
app.get("/contactUs/:id", contactController.getOneContactEmail);
app.post("/contactUs", contactController.createNewContactUsMessage);
app.put("/contactUs/:id", contactController.updateContactMessage);
app.delete("/contactUs/:id", contactController.deleteContactMessage);

app.get("/", (req, res) => {
  res.send("This is root!!");
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

const { ContactEmails } = require("../models");

const getAllContactEmails = async (req, res) => {
  try {
    const contactEmails = await ContactEmails.find();
    res.json(contactEmails);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function getOneContactEmail(req, res) {
  try {
    const id = req.params.id;
    const contactEmail = await ContactEmails.findById(id);
    if (contactEmail) {
      return res.json(contactEmail);
    }
    return res.status(404).send("contact with this id does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function createNewContactUsMessage(req, res) {
  try {
    const contactMessage = new ContactEmails(req.body);
    await contactMessage.save();
    return res.status(201).json(contactMessage);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

async function updateContactMessage(req, res) {
  try {
    const id = req.params.id;
    const contactUs = await ContactEmails.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (contactUs) {
      return res.status(200).send(contactUs);
    }
    throw new Error("ContactUs Message Not Found");
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

async function deleteContactMessage(req, res) {
  try {
    const id = req.params.id;
    const deleteMessage = await ContactEmails.findByIdAndDelete(id);
    if (deleteMessage) {
      return res
        .status(200)
        .json({ message: "ContactUs Message succesfully deleted!" });
    }
    throw new Error("ContactUs Message not found!");
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

module.exports = {
  getAllContactEmails,
  getOneContactEmail,
  createNewContactUsMessage,
  updateContactMessage,
  deleteContactMessage,
};

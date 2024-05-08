
const express = require('express');
const router = express.Router();
const { generateUID, isUIDUnique } = require('../utils/uidGenerator');

router.post('/register', async (req, res) => {
  const { fullName, dateOfBirth, address, contactInfo } = req.body;

  // Generate a unique UID
  let uid;
  do {
    uid = generateUID();
  } while (!isUIDUnique(uid));

  // Create the Aadhar card object
  const aadharCard = {
    uid,
    fullName,
    dateOfBirth,
    address,
    contactInfo,
  };

 

  res.json({ uid, aadharCard });
});

module.exports = router;

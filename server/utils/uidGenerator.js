
const crypto = require('crypto');

const uidSet = new Set();

const generateUID = () => {
  const uid = crypto.randomBytes(8).toString('hex');
  return uid;
};

const isUIDUnique = (uid) => {
  if (uidSet.has(uid)) {
    return false;
  }
  uidSet.add(uid);
  return true;
};

module.exports = { generateUID, isUIDUnique };

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config.js');

function setUser(id, user) {
  
  return jwt.sign({
    _id:user._id,
    email:user.email,
  }, JWT_SECRET);
}


function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  }catch(e){
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};

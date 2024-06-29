const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
const jwtToken = async (email) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    email,
  };

  const token = jwt.sign(data, jwtSecretKey);
  return token;
};
module.exports = {
  jwtToken,
};

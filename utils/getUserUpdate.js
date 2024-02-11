const signUpModel = require("../Models/signupModel");

const getSignUpUser = async (data) => {
  let { email, phoneNumber } = data;
  const query = { $or: [{ email }, { phoneNumber }] };
  const results = await signUpModel.find(query);
  return results;
};
const updateCart = async (data) => {
  let { id, updateQuery, cartAdded, method } = data;
  if (method == "delete") {
    cartAdded;
  } else {
    cartAdded.push(updateQuery);
  }
  let addGameToCart = await signUpModel.updateOne(
    { _id: id },
    {
      $set: { cartAdded },
    },
    { upsert: true }
  );
  return { addGameToCart, method };
};

module.exports = { getSignUpUser, updateCart };

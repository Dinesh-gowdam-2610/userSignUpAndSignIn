const gameList = require("../faker");
const getUserUpdate = require("../utils/getUserUpdate");
const { USER_MESSAGE } = require("../utils/constants");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
let jwtSecretKey = process.env.JWT_SECRET_KEY;
const {
  INVALID_AUTHORIZATION,
  SIGN_UP_MSG,
  USER_NOT_FOUND_ERROR,
  AUTHORIZATION,
} = USER_MESSAGE;
const getGameList = async (req, res) => {
  try {
    const { limit } = req.params;
    let slicedGame = limit == 0 ? gameList : gameList.slice(0, limit);
    res.send(slicedGame);
  } catch (e) {
    console.log(e);
  }
};

const addCartGame = async (req, res) => {
  try {
    //JWT VERIFICATION
    const token = req.headers[AUTHORIZATION]?.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: INVALID_AUTHORIZATION });
    }

    const verified = jwt.verify(token, jwtSecretKey);

    if (!verified) {
      return res.status(401).json({ message: INVALID_AUTHORIZATION });
    }

    // TO CHECK IF THE USER CRENDENTIALS VALID OR SIGNED-UP USER
    let results = await getUserUpdate.getSignUpUser({
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
    if (results.length === 0) {
      return res
        .status(404)
        .json({ error: USER_NOT_FOUND_ERROR, message: SIGN_UP_MSG });
    }
    const gameId = req.query.gameId;
    if (
      results[0].cartAdded.length > 0 &&
      results[0].cartAdded.find((item) => item.id == gameId)
    ) {
      res.status(400).json({ message: "Game already added your cart" });
    } else {
      const gameIdentify = gameList.find((game) => game.id == gameId);
      const { id, title, price, graphics, platform } = gameIdentify;
      const gameUpdatedList = await getUserUpdate.updateCart({
        id: results[0]._id,
        updateQuery: { id, title, price, graphics, platform },
        cartAdded: results[0].cartAdded,
      });
      res.status(200).json({
        outcome: gameUpdatedList?.addGameToCart?.acknowledged ?? false,
        message: gameUpdatedList?.addGameToCart?.acknowledged
          ? `Game ${
              gameUpdatedList.method == "delete" ? "deleted" : "added"
            } successfully`
          : `Failed to ${
              gameUpdatedList.method == "delete" ? "delete" : "add"
            }  or item already ${
              gameUpdatedList.method == "delete" ? "deleted" : "added"
            }`,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const deleteCartGame = async (req, res) => {
  try {
    const token = req.headers[AUTHORIZATION]?.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: INVALID_AUTHORIZATION });
    }

    const verified = jwt.verify(token, jwtSecretKey);

    if (!verified) {
      return res.status(401).json({ message: INVALID_AUTHORIZATION });
    }

    // TO CHECK IF THE USER CRENDENTIALS VALID OR SIGNED-UP USER
    let results = await getUserUpdate.getSignUpUser({
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
    if (results.length === 0) {
      return res
        .status(404)
        .json({ error: USER_NOT_FOUND_ERROR, message: SIGN_UP_MSG });
    }
    const gameId = req.query.gameId;
    let gameExist = results[0].cartAdded.filter((item) => item.id != gameId);
    const { id, title, price, graphics, platform } = gameExist;
    const gameUpdatedList = await getUserUpdate.updateCart({
      id: results[0]._id,
      updateQuery: { id, title, price, graphics, platform },
      cartAdded: gameExist ?? [],
      method: "delete",
    });
    res.status(200).json({
      outcome: gameUpdatedList?.addGameToCart?.acknowledged ?? false,
      message: gameUpdatedList?.addGameToCart?.acknowledged
        ? `Game ${
            gameUpdatedList.method == "delete" ? "deleted" : "added"
          } successfully`
        : `Failed to ${
            gameUpdatedList.method == "delete" ? "delete" : "add"
          }  or item already ${
            gameUpdatedList.method == "delete" ? "deleted" : "added"
          }`,
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  getGameList,
  addCartGame,
  deleteCartGame,
};

const Users = require("express").Router();
const db = require("../models");
const { user, post, comment } = db;

//GET SPECIFIC USER
Users.get("/:id", async (req, res) => {
  try {
    let includedModels = [];
    let ordering = [];

    // include posts
    if (req.query.withPosts === "true") {
      includedModels.push({
        model: post,
      });

      ordering.push([post, "date", "desc"]);
    }

    // find user
    const foundUser = await user.findOne({
      where: { user_id: req.params.id },
      include: includedModels,
      order: ordering,
    });

    // check that a user was found
    if (!foundUser) {
      // Found null
      res.status(404).json({
        message: `404: Could not find user with id of ${req.params.id}.`,
      });
    } else {
      // Found user
      res.status(200).json(foundUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//UPDATE USER
Users.put("/:id", async (req, res) => {
  try {
    const updatedUser = await user.update(req.body, {
      where: {
        user_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated user ${req.params.id}`,
      updatedUser: updatedUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//EXPORT
module.exports = Users;

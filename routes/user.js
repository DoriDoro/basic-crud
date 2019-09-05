const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/users/:id/delete", (req, res) => {
  userModel
    .findByIdAndDelete(req.params.id)
    .then(dbRres => {
      res.redirect("/users");
    })
    .catch(dbErr => console.log(dbErr));
});

router.get("/users/:id/edit", (req, res) => {
  userModel
    .findById(req.params.id)
    .then(user => {
      res.render("form_user_edit", { user });
    })
    .catch(dbErr => {
      console.log(dbErr);
    });
});

router.post("/users-edit/:id", (req, res) => {
  //make some verification here
  const { username, password, email } = req.body;

  userModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      res.redirect("/users");
    })
    .catch(dbErr => {
      console.log(dbErr);
    });
});

router.get("/users", (req, res) => {
  userModel
    .find()
    .then(allUsers => {
      res.render("users_table", { users: allUsers });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/users/create", (req, res) => {
  res.render("form_user");
});

router.post("/users", (req, res) => {
  // console.log(req.body);
  const { username, password, email } = req.body;
  //my verification here but i do not have time for this
  userModel
    .create(req.body)
    .then(dbRes => {
      res.redirect("/users");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;

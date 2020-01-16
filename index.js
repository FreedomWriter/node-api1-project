const express = require("express");
const db = require("./data/db");
const cors = require("cors");

const server = express();
server.use(cors());

server.listen(4000, () => {
  console.log("*********** listening on port 4000");
});

server.use(express.json());

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessge: "The users information could not be retrieved." });
    });
});

server.post("/api/users", (req, res) => {
  const usersInfo = req.body;

  if (usersInfo.name && usersInfo.bio) {
    db.insert(usersInfo)
      .then(userID => {
        db.findById(userID.id).then(user =>
          res.status(201).json({ success: true, user })
        );
      })
      .catch(err => {
        res.status(500).json({ success: false, err });
      });
  } else {
    res.status(400).json({
      success: false,
      message: "Please provide a name and bio for the user"
    });
  }
});

server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then(user => {
      if (user) {
        res.status(200).json({ success: true, user });
      } else {
        res.status(404).json({
          success: false,
          message: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "The user information could not be retrieved.",
        err
      });
    });
});

server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      if (typeof user === "object") {
        db.remove(id)
          .then(removeRes => {
            removeRes
              ? res.status(200).json(user)
              : res.status(404).json({
                  message: "The user with the specified ID is not exist"
                });
          })
          .catch(err => console.log(err));
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "The user could not be removed" });
    });
});

server.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  console.log(req.body);
  if (changes.name && changes.bio) {
    db.update(id, changes)
      .then(updated => {
        if (updated) {
          res.status(200).json({ success: true, updated });
        } else {
          res.status(404).json({
            success: false,
            message: "The user with the specified ID does not exist"
          });
        }
      })
      .catch(err => {
        res.status(500).json({ success: false, err });
      });
  } else {
    res.status(400).json({
      success: false,
      message: "Please provide name and bio for the user."
    });
  }
});

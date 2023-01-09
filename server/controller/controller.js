const { response } = require("express");
var Userdb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user in the db
  user
    .save(user)
    .then((data) => {
      //res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "생성 작업을 하는 데 오류가 발생했습니다.",
      });
    });
};

// 모든/단일 유저 검색 및 반환
exports.find = (req, res) => {
  if (req.query.id) {
    // 단일 유저 쿼리 id 검색
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).end({ message: "Error retrieving user with id" + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "사용자 정보 검색 오류가 발생하였습니다.",
        });
      });
  }
};
// Update a new identified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

// Delete a user with specified usr id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ meesage: `Cannot Delete with id ${id}. Maybe id is wrong!` });
      } else {
        res.send({
          message: "유저가 정상적으로 삭제되었습니다.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id" + id,
      });
    });
};

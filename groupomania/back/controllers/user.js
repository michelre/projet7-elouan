const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const connection = require('../connection');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
  //res.status(201).json(req.body);
  //add new user and return 201
  const salt = await bcrypt.genSalt(10);
  var user = {
    name : req.body.name,
    email : req.body.email,
    password : await bcrypt.hash(req.body.password, salt)
  };
  created_user = await User.create(user);
  res.status(201).json(created_user);
};
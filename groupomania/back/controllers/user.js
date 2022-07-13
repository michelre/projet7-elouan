const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const connection = require('../connection');

const User = require('../models/user');

exports.signup = (req, res, next) => {
  User.findOne ({where: {email: req.body.email}})
    .then(user => {
      if (user) {
        return res.status(409).json({ error: 'Email already exists' });
      }
      bcrypt.hash(req.body.password, 10)
        .then(hash => {
          let user = {
            name : req.body.name,
            email : req.body.email,
            password : hash
          }
          User.create(user);
          User.save()
            .then(() => res.status(201).json({message: 'User created'}))
            .catch(error => res.status(400).json({ error}));
        })
        .catch(error => res.status(500).json({ error }));
    })
};

exports.login = (req, res, next) => {
  User.findOne ({where: {email: req.body.email}})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user.id,
            token: jwt.sign(
              { userId: user._id },
              'secret',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};




/* exports.signup = (req, res, next) => {
  User.findOne ({where: {email: req.body.email}} )
    .then(user => {
      if (user) {
        return res.status(409).json({ error: 'Email already exists' });
      }
        bcrypt.hash(req.body.password, 10)
          .then(hash => {
            let user = {
              name : req.body.name,
              email : req.body.email,
              password : hash
            }
            User.create(user);
            User.save();
            res.status(201).json({ message: 'User registered !' });
          })
          .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
}; */
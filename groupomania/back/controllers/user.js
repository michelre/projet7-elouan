const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
require('dotenv').config();

const User = db.user;

exports.signup = (req, res, next) => {
  User.findOne ({where: {email: req.body.email}})
    .then(user => {
      if (user) {
        return res.status(409).json({ error: 'Email already exists' });
      }
      if (req.body.email === '') {
        return res.status(400).json({ error: 'Veuillez entrez une addresse mail' });
      } else if (req.body.passwordConfirmation === '') {
          return res.status(400).json({ error: 'Veuillez confirmer le mot de passe' });
      } else if (req.body.passwordConfirmation !== req.body.password) {
          return res.status(400).json({ error: 'Les mots de passe ne correspondent pas !' });
      } else {
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
          const user = User.build ({
            name : req.body.name,
            email : req.body.email,
            password : hash
          });
          user.save()
            .then(() => res.status(201).json({message: 'User created'}))
            .catch(error => res.status(400).json({ error}));
        })
        .catch(error => res.status(500).json({ error }));
      }
    })
    .catch(error => res.status(500).json({ error }));
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
              { userId: user.id },
              process.env.TOKEN,
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};
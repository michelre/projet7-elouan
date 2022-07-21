const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const fs = require('fs');
const session = require('express-session');
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
          req.session.userId = user.id;
          req.session.save(() => {})
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

exports.logout = (req, res, next) => {
  User.findOne ({where: {id: req.userId}})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      } else {
        req.session.destroy();
        res.redirect('/login');
        res.status(200).json({ message: 'Logout successful' });
      }
    })
    .catch(error => res.status(500).json({ error }));
};

exports.setProfilePicture = (req, res, next) => {
  User.findOne ({where: {id: req.userId}})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      } else {
        const User = {
          ...user,
          image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        }
        user.update(User, {where:{ id: req.params.id }})
        .then(() => res.status(200).json({ message: 'Profile picture updated' }))
        .catch(error => res.status(500).json({ error }));
      }
    })
};

exports.deleteProfilePicture = (req, res, next) => {
  User.findOne ({where: {id: req.userId}})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      } else {
        const imageName = user.image.split('/images/')[1];
          fs.unlink(`images/${imageName}`, (error) => {
            if (error) {
              return res.status(500).json({ error: 'Erreur lors de la suppression de l\'image' });
            }
          })
        const User = {
          ...user,
          image: 'https://res.cloudinary.com/dzqbzqgjm/image/upload/v1599098981/default-profile-picture_qjqjqj.png'
        }
        user.update(User, {where:{ id: req.params.id }})
          .then(() => res.status(200).json({ message: 'Profile picture deleted' }))
          .catch(error => res.status(500).json({ error }));
      }
    })
}
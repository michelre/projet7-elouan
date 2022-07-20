const db = require('../models');
const fs = require('fs');
const auth = require('../middleware/auth');

const Post = db.post;
const User = db.user;

exports.create = (req, res, next) => {
  const postObjectTemp = JSON.stringify(req.body); 
  const postObject = JSON.parse(postObjectTemp);  //très très très mauvaise pratique
  delete postObject._id;
  let post = new Post({
    ...postObject,
    userId: req.userId,
  });
  if (req.file) {
    post.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  }
  post.save()
    .then(() => res.status(201).json({ message: 'Post crée !' }))
    .catch(error => res.status(400).json({ error }));
}

exports.getAll = (req, res, next) => {
  Post.findAll({
    include: [{
      model: User,
      attributes: ['name', 'profilePicture'],
    }],
  })
    .then((posts) => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
}

exports.getOne = (req, res, next) => {
  Post.findOne({where:{ id: req.params.id }})
    .then((post) => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
}

exports.deleteOne = (req, res, next) => {
  Post.findOne({where:{ id: req.params.id }})
    .then(Post => {
      if (req.userId === Post.userId) {
        if (Post.image !== null) {
          const imageName = Post.image.split('/images/')[1];
          fs.unlink(`images/${imageName}`, (error) => {
            if (error) {
              return res.status(500).json({ error: 'Erreur lors de la suppression de l\'image' });
            }
          })
        }
        Post.destroy({where:{ id: req.params.id }})
          .then(() => res.status(200).json({ message: 'Post supprimé !' }))
          .catch(error => res.status(400).json({ error }));
      } else {
        res.status(400).json({ error: 'Vous n\'avez pas le droit de supprimer ce post' });
      }
    })
    .catch(error => res.status(404).json({ error }));
}

exports.updateOne = (req, res, next) => {
  Post.findOne({where:{ id: req.params.id }})
    .then(Post => {
      if (req.userId === Post.userId) {
        if (req.file) {
          const imageName = Post.image.split('/images/')[1];
          fs.unlink(`images/${imageName}`, (error) => {
            if (error) {
              return res.status(500).json({ error: 'Erreur lors de la suppression de l\'image' });
            }
          })    
        }
        const temp = JSON.stringify(req.body);
        const postObject = JSON.parse(temp);
        const post = req.file ? {
          ...postObject,
          image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...postObject };
        Post.update(post, {where:{ id: req.params.id }})
          .then(() => res.status(200).json({ message: 'Post modifié !' }))
          .catch(error => res.status(400).json({ error }));
      } else {
        res.status(400).json({ error: 'Vous n\'avez pas le droit de modifier ce post' });
      }
    })
    .catch(error => res.status(404).json({ error: 'post non trouvé' }));
}

exports.likes = (req, res, next) => {
  Post.findOne({where:{ id: req.params.id }})
    .then(Post => {
      switch (req.body.likes) {
        case 1:
          if (userslikes.includes(userId)) {
            res.status(400).json({ error: 'Vous avez déjà liké ce post' });
          } else {
            Post.update({ likes: Post.likes + 1 }, {where:{ id: req.params.id }})
              .then(() => res.status(200).json({ message: 'Post liké !' }))
              .catch(error => res.status(400).json({ error }));
          }
          break;
        case 0:
          if (userslikes.includes(userId)) {
            Post.update({ likes: Post.likes - 1 }, {where:{ id: req.params.id }})
              .then(() => res.status(200).json({ message: 'Post unliked !' }))
              .catch(error => res.status(400).json({ error }));
          } else {
            res.status(400).json({ error: 'Vous n\'avez pas liké ce post' });
          }
          break;
        default:
          res.status(400).json({ error: 'Vous n\'avez pas liké ce post' });
          break;
      }
    })
    .catch(error => res.status(404).json({ error }));
}
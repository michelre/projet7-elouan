const db = require('../models');


const Post = db.post;

exports.create = (req, res, next) => {
  const postObjectTemp = JSON.stringify(req.body); 
  const postObject = JSON.parse(postObjectTemp);  //très très très mauvaise pratique
  delete postObject._id;
  const post = new Post({
    ...postObject,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  post.save()
    .then(() => res.status(201).json({ message: 'Post crée !' }))
    .catch(error => res.status(400).json({ error }));
}

exports.getAll = (req, res, next) => {
  Post.findAll()
    .then((posts) => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
}

exports.getOne = (req, res, next) => {
  Post.findOne({where:{ id: req.params.id }})
    .then((post) => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
}
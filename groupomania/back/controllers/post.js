const db = require('../models');


const Post = db.post;

exports.create = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  const post = new Post({
    ...postObject,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  post.save()
    .then(() => res.status(201).json({ post }))
    .catch(error => res.status(400).json({ error }));
}
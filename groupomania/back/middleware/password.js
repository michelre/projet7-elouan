const passwordValidator = require('password-validator');
const validator = require('validator');

const passwordSchema = new passwordValidator();

passwordSchema
  .is().min(8) // Longueur minimale de 8 caractères
  .is().max(40) // Longueur maximale de 40 caractères
  .has().uppercase() // Doit contenir au moins une lettre en majuscule
  .has().lowercase() // Doit contenir au moins une lettre en majuscule
  .has().digits(2) // Doit contenir au moins deux chiffres
  .has().not().spaces() // Ne doit pas contenir d'espace
  .is().not().oneOf(['password','123', 'Passw0rd', 'Password123']) // Ne doit pas être un mot de passe par défaut
  .usingPlugin(validator.isEmail, 'Password should be an email');

module.exports = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next();
  } else {
    switch (true) {
      case req.body.password.length < 8:
        res.status(400).json({ error: 'Password must be at least 8 characters long' });
        break;
      case req.body.password.length > 40:
        res.status(400).json({ error: 'Password must be at most 40 characters long' });
        break;
      case !req.body.password.match(/[A-Z]/):
        res.status(400).json({ error: 'Password must contain at least one uppercase letter' });
        break;
      case !req.body.password.match(/[a-z]/):
        res.status(400).json({ error: 'Password must contain at least one lowercase letter' });
        break;
      case !req.body.password.match(/[0-9]{2}/):
        res.status(400).json({ error: 'Password must contain at least two digits' });
        break;
      case req.body.password.match(/\s/):
        res.status(400).json({ error: 'Password must not contain any spaces' });
        break;
      case req.body.password === 'password' || req.body.password === '123' || req.body.password === 'Passw0rd' || req.body.password === 'Password123':
        res.status(400).json({ error: 'Password must not be a default password' });
        break;
      case !validator.isEmail(req.body.password):
        res.status(400).json({ error: 'Password must be an email' });
        break;
      default:
        res.status(500).json({ error: 'Password is not valid' });
        break;
    }
  }
};
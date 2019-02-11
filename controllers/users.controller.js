const User = require('../models/user.model');
const Relationship = require('../models/relationship.model');

module.exports.profile = (req, res, next) => {
  res.render('profile/index');
}

module.exports.list = (req, res, next) => {
  res.render('matches/matches');
}

module.exports.edit = (req, res, next) => {
  res.render('profile/edit');
}

module.exports.doEdit = (req, res, next) => {
  const updates = {
    name: req.body.name, 
    age: req.body.age,
    gender: req.body.gender,
    lookingFor: req.body.lookingFor
  } 

  User.findByIdAndUpdate(req.user._id, {$set: updates}, {new: true})
    .then(user => {
        if (user) {
          res.redirect('/adopta');
        } else {
          res.redirect('/');
        }
    })
    .catch (error => next(error));
    
}

Relationship.find( { status: 'reject' })
  .then(relation => {
    if (relation) {
    } else {
    }
  })
  .catch (error => next(error));

'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');
const routeGuard = require('./../middleware/route-guard');
const fileUploadMiddleware = require('./../middleware/file-upload');

const router = new Router();

router.post('/signup', (req, res, next) => {
  const { name, email, password, campus, course, image } = req.body;
  bcryptjs
    .hash(password, 10)
    .then((hash) => {
      return User.create({
        name,
        email,
        campus,
        course,
        image,
        passwordHashAndSalt: hash
      });
    })
    .then((user) => {
      req.session.userId = user._id;
      res.json({ user });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/login', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHashAndSalt);
      }
    })
    .then((result) => {
      if (result) {
        req.session.userId = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ type: 'success', data: { title: 'OK' } });
});

router.get('/loggedin', (req, res) => {
  const user = req.user || null;
  res.json({ user });
});

router.post('/edit', routeGuard, (req, res, next) => {
  const { name, campus, course } = req.body;
  User.findByIdAndUpdate(
    req.user.id,
    { name, campus, course },
    { new: true, useFindAndModify: false }
  )
    .then((user) => {
      res.json({ user });
    })
    .catch((error) => {
      next(error);
    });
});

router.post(
  '/upload',
  routeGuard,
  fileUploadMiddleware.single('image'),
  (req, res, next) => {
    let picture;
    if (req.file) picture = req.file.path;

    User.findByIdAndUpdate(
      req.user.id,
      { image: picture },
      { new: true, useFindAndModify: false }
    )
      .then((user) => {
        res.json({ user });
      })
      .catch((error) => {
        next(error);
      });
  }
);

module.exports = router;

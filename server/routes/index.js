'use strict';

const express = require('express');
const router = new express.Router();
const routeGuard = require('./../middleware/route-guard');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'lab-profile-app' } });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.json({});
});

module.exports = router;

const express = require('express');
const router = express.Router();

const controller = require('../controllers/page-controller');

const PageRoute = router
  .get('/home', controller.getHomePageData)
  .get('/dashboard', controller.getDashboardPageData)
  .post('/greet', controller.getGreeting)
  .delete('/article/:id', () => {});

module.exports = PageRoute;

// url params
// domain/posts/1

// url query params
// domain.com?token=87w4jo7dcy4kn9y47iytbai74tvakn4yk7y

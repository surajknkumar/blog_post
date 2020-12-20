/**
 * @format
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Sumitra - only for interview purpose
 */

const express = require('express');
const router = express.Router();

var articleService = require('../service/article.service');

//create new  article
router.post('/create', async (req, res) => {
  await articleService.create_article(req.body).then(function (data) {
    if (data) {
      res.send(data);
      res.status(200);
    } else {
      res.status(401);
    }
  });
});

//get all article
router.get('/getData', async (req, res) => {
  await articleService.get_article().then(function (data) {
    if (data) {
      res.send(data);
      res.status(200);
    } else {
      res.status(401);
    }
  });
});

//get article by slug
router.post('/:slug', function (req, res) {
  articleService.getBySlug(req.params.slug).then(function (data) {
    if (data) {
      res.send(data);
      res.status(200);
    } else {
      res.status(401);
    }
  });
});

//update article
router.post('/update/:id', function (req, res) {
  const body = {body: req.body, id: req.params.id};
  articleService.update_article(body).then(function (data) {
    if (data) {
      res.send(data);
      res.status(200);
    } else {
      res.status(401);
    }
  });
});

//delete article
router.post('/delete/:id', function (req, res) {
  articleService.delete_article(req.params.id).then(function (data) {
    if (data) {
      res.send(data);
      res.status(200);
    } else {
      res.status(401);
    }
  });
});

module.exports = router;

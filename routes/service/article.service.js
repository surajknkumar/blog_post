/**
 * @format
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Sumitra - only for interview purpose
 */

var Q = require('q');
var Article = require('../../models/article');

var articleService = {};
articleService.get_article = get_article;
articleService.create_article = create_article;
articleService.delete_article = delete_article;
articleService.update_article = update_article;
articleService.getBySlug = getBySlug;

// get data by slug
function getBySlug(body) {
  var deferred = Q.defer();
  Article.findOne({slug: body}, function (err, data) {
    if (err) deferred.reject(err.name + ': ' + err.message);
    deferred.resolve(data);
  });
  return deferred.promise;
}

// find all
function get_article() {
  var deferred = Q.defer();
  Article.find({}, function (err, data) {
    if (err) deferred.reject(err.name + ': ' + err.message);
    deferred.resolve(data);
  }).sort({createdAt: 'desc'});
  return deferred.promise;
}

// create new article
function create_article(body) {
  var deferred = Q.defer();
  Article.create(body, function (err, data) {
    if (err) deferred.reject(err.name + ': ' + err.message);
    deferred.resolve(data);
  });
  return deferred.promise;
}

//delete the article
function delete_article(body) {
  var deferred = Q.defer();
  Article.findByIdAndDelete(body, function (err, data) {
    if (err) deferred.reject(err.name + ': ' + err.message);
    deferred.resolve(data);
  });
  return deferred.promise;
}

//update the article
function update_article(data) {
  var deferred = Q.defer();
  Article.findByIdAndUpdate(data.id, data.body, function (err, data) {
    if (err) deferred.reject(err.name + ': ' + err.message);
    deferred.resolve(data);
  });
  return deferred.promise;
}

module.exports = articleService;

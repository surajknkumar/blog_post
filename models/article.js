/**
 * @format
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Sumitra - only for interview purpose
 */

const mongoose = require('mongoose');
const slugify = require('slugify');

const articleSchema = new mongoose.Schema({
  title: {type: String, required: true},
  sortDetail: {type: String, required: true},
  description: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

//creating slug before the schema
articleSchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, {lower: true, strict: true});
  }
  next();
});
module.exports = mongoose.model('Article', articleSchema);

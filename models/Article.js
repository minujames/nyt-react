const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headLine: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  publishedDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;

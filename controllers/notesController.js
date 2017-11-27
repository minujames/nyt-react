const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Note
    .create(req.body)
    .then( note => {
      return db.Article.findOneAndUpdate({"_id": req.params.articleId}, 
        { $push: { notes: note._id }}, { new: true });
    })
    .then(function(article){
      res.json(article);
    })
    .catch(function(error){
      res.json(error);
    });
  },
  remove: function(req, res){
    db.Note
    .findByIdAndRemove(req.params.noteId)
    .then(function(note){
      return db.Article.findOneAndUpdate({"_id": req.params.articleId}, 
        { $pull: { notes: req.params.noteId }}, { new: true });
    })
    .then(function(article){
      res.json(article);
    })
    .catch(function(error){
      res.json(error);
    });
  }
};
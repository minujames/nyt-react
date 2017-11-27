import axios from "axios";

export default {

  search:(topic, startYear, endYear) => {
    const APIkey = 'dd5006dd525842fd8a6eb8360611378a'
    const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIkey + '&q="' + topic + '"&begin_date=' + startYear + '0101&end_date=' + endYear + '0101';
    console.log(queryURL);
    return axios.get(queryURL);
  },

  saveArticle: articleObj => {
    return axios.post("/api/article", articleObj);
  },

  getSavedArticles: () => {
    return axios.get("/api/article");
  },

  getArticleNotes: (id) => {
    return axios.get("/api/article/" + id)
  },

  removeArticle: id => {
    return axios.delete("/api/article/" + id)
  },

  addArticleNote: (articleId, noteObj) => {
    return axios.post("/api/note/" + articleId, noteObj)
  },

  removeArticleNote: (noteId, articleId) => {
    return axios.delete("/api/note/" + noteId + "/" + articleId)
  }
};


const apiKey = require('../apiKey');

class NewsClient {
  constructor() {
    this.url = `https://content.guardianapis.com/search?api-key=${apiKey}`;
  }

  loadArticles(callback) {
    return fetch(this.url).then(response => response.json())
    .then((data) => {
      const articles = [];
      data.response.results.forEach((result) => {
        articles.push({
          title: result.webTitle,
          link: result.webUrl
        })
      })
      callback({"articles": articles});
    })
  }
}

module.exports = NewsClient;
const apiKey = require('../apiKey');

class NewsClient {
  constructor() {
    this.url = `https://content.guardianapis.com/search?api-key=${apiKey}`;
  }

  loadArticles(callback) {
    return fetch(this.url).then(response => response.json())
    .then((data) => {
      const results = [];
      data.response.results.forEach((result) => {
        results.push({
          title: result.webTitle,
          link: result.webUrl
        })
      })
      callback({"results": results});
    })
  }
}

module.exports = NewsClient;
const apiKey = require('../apiKey');

class NewsClient {
  constructor() {
    this.url = `https://content.guardianapis.com/search?api-key=${apiKey}`;
  }

  loadArticles() {
    return fetch(this.url).then(response => response.json())
    .then((data) => {
      const results = [];
      data.results.forEach((result) => {
        results.push({
          title: result.webTitle,
          link: result.webUrl
        })
      })
      return {"results": results};
    })
  }
}

module.exports = NewsClient;
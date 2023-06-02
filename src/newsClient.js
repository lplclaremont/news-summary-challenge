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
          url: result.webUrl
        })
      })
      callback({"articles": articles});
    })
  }
}

// const client = new NewsClient();
// client.loadArticles((result) => {
//   console.log(result)
// })

module.exports = NewsClient;
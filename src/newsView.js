class NewsView {
  constructor(client) {
    this.client = client
    this.mainContainer = document.querySelector('#main-container')
  }

  displayArticles() {
    this.client.loadArticles((result) => {
      const articles = result.articles;

      articles.forEach((article) => {
        const articleEl = document.createElement('div')
        articleEl.textContent = article.title;
        articleEl.className = 'article';
        this.mainContainer.append(articleEl);
      })

    });
  }
}

module.exports = NewsView;
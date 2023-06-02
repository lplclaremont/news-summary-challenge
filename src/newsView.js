class NewsView {
  constructor(client) {
    this.client = client
    this.mainContainer = document.querySelector('#main-container')
  }

  displayArticles() {
    this.client.loadArticles((result) => {
      const articles = result.articles;

      articles.forEach((article) => {
        const articleEl = document.createElement('a')
        const breakEl = document.createElement('br')
        articleEl.textContent = article.title;
        articleEl.className = 'article';
        articleEl.href = article.url;

        this.mainContainer.append(articleEl);
        this.mainContainer.append(breakEl);
      })

    });
  }
}

module.exports = NewsView;
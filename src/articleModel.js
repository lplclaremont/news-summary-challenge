class ArticleModel {
  constructor() {
    this.title = "";
    this.url = "";
  }

  getTitle() {
    return this.title;
  }

  getUrl() {
    return this.url;
  }

  setTitle(title) {
    this.title = title;
  }

  setUrl(url) {
    this.url = url;
  }
}

module.exports = ArticleModel;
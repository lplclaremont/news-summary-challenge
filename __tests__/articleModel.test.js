ArticleModel = require('../src/articleModel')

describe('ArticleModel', () => {
  it('sets an article title and url', () => {
    const model = new ArticleModel();
    model.setTitle("Article Title")
    model.setUrl("Article url")

    expect(model.getTitle()).toEqual("Article Title");
    expect(model.getUrl()).toEqual("Article url");
  })
})
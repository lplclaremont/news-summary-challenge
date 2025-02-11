/**
 * @jest-environment jsdom
 */

NewsClient = require('../src/newsClient')
NewsView = require('../src/newsView')

const fs = require('fs');

jest.mock('../src/newsClient')

describe('NewsView', () => {
  beforeEach(() => {
    NewsClient.mockClear();
  });

  it('displays articles onto the screen with link to URL', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    mockArticles = [
      {
        title: "title 1",
      },
      {
        title: "title 2",
      }
    ]

    const client = new NewsClient();
    client.loadArticles.mockImplementation((callback) => {
      callback({articles: mockArticles})
    })

    view = new NewsView(client);

    view.displayArticles();

    articles = document.querySelectorAll('.article')

    expect(articles.length).toEqual(2)
    expect(articles[0].textContent).toEqual("title 1")
    expect(articles[1].textContent).toEqual("title 2")
  })

  it('displays article images onto the screen', () => {
    
  })
})
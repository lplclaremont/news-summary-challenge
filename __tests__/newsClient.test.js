NewsClient = require('../src/newsClient')
require('jest-fetch-mock').enableMocks()

describe('NewsClient', () => {
  it('retrieves article data from the API with a title and url', (done) => {
    client = new NewsClient();
  
    const mockResponse = {
      response: {
        results: [
          {
            webTitle: 'My news headline',
            webUrl: 'page URL',
          },
        ],
      },
    };
  
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    });
  
    client.loadArticles((resultData) => {
      article = resultData.results[0];
      expect(article.title).toEqual('My news headline');
      expect(article.link).toEqual('page URL');
      done();
    });
  });

  it('retrieves relavent data from the API with a search term', () => {

  })
})
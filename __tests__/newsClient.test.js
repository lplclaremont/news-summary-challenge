NewsClient = require('../src/newsClient')
require('jest-fetch-mock').enableMocks()

describe('NewsClient', () => {
  beforeEach(() => {
    fetchMock.doMock()
  })

  it('retrieves relavent data from the API', (done) => {
    client = new NewsClient();

    const mockResponse = {
      results: [
        {
          webTitle: 'My news headline',
          webUrl: 'page URL',
        },
      ],
    };
    
    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    client.loadArticles()
    .then((resultData) => {
      article = resultData.results[0]
      expect(article.title).toEqual("My news headline")
      //expect(article.img).toEqual("img URL")
      expect(article.link).toEqual("page URL")
      done();
    })
  })

  it('retrieves relavent data from the API with a search term', () => {

  })
})
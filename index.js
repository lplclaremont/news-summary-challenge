const NewsClient = require('./src/newsClient');
const NewsView = require('./src/newsView');

client = new NewsClient();
view = new NewsView(client);

view.displayArticles()
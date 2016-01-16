var blog = {};
blog.articles = [];

function Article(properties){
  this.title = properties.title;
  this.category = properties.category;
  this.author = properties.author;
  this.authorUrl = properties.authorUrl;
  this.publishedOn = properties.publishedOn;
  this.body = properties.body;
}

for (var i =0; i<blog.rawData.length; i++){
  var article = new Article(blog.rawData[i]);
  blog.articles.push(article);
}

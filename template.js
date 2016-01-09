var projects = [];

function Project (opts) {
  this.author = opts.author;
  this.title = opts.title;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.attr('data-category', this.category);

  $newProject.find('a').html(this.author);
  $newProject.find('a').attr('href', this.authorUrl);
  $newProject.find('h1').html(this.title);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time').attr('datetime', this.publishedOn);

  $newProject.find('time[pubdate]').attr('title', this.publishedOn);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newProject.append('<hr>');

  $newProject.removeClass('template');

  return $newProject;
};

placeHolder.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

placeHolder.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});

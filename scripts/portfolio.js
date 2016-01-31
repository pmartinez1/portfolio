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
  $newProject.append('<a class="more">MORE</a>');
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
  $('.projects').append(a.toHtml());
});

$(document).ready(function(){
  $('#home-btn').click(function(){
    $('.about-me').addClass('hide');
    $('.projects').removeClass('hide');
  }
);});
$(document).ready(function(){
  $('#about-btn').click(function(){
    $('.projects').addClass('hide');
    $('.about-me').removeClass('hide');
  }
);});

var articleFunctions = {};

articleFunctions.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
  $('.projects').on('click','.more', function(event){
    event.preventDefault();
    $(this).parent().find('*').show();
    $(this).replaceWith('<a class="less">LESS</a>');
  });
};

articleFunctions.removeTeasers = function(){
  $('.projects').on('click','.less', function(event){
    event.preventDefault();
    $('.project-body *:nth-of-type(n+2)').hide();
    $(this).replaceWith('<a class="more">MORE</a>');
  });
};

articleFunctions.setTeasers();
articleFunctions.removeTeasers();

//had to make a change
// var test = this.publishedOn;
// $newProject.find('.count-up').addClass(test);
// var thumbsUpCount = 0;
//   $('.thumbs-up').click(function (){
//     thumbsUpCount+= 1;
//     $newProject.find('.count-up.'+ test).html(thumbsUpCount);
//   });

// var thumbsDownCount = 0;
//   $('.thumbs-down').click(function (){
//     thumbsDownCount+= 1;
//   $newProject.find('.count-down').html(thumbsDownCount);
//   });

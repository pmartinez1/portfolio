  function Project (opts) {
    this.author = opts.author;
    this.title = opts.title;
    this.category = opts.category;
    this.authorUrl = opts.authorUrl;
    this.publishedOn = opts.publishedOn;
    this.body = opts.body;
  }

  Project.all = [];

  // Project.prototype.toHtml = function() {
  //   var projectTemplate = $('#project-template').html();
  //   var compileTemplate = Handlebars.compile(projectTemplate);
  //
  //   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  //   this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  //   this.more = '<a class="more">MORE</a>';
  //   this.hr = '<hr>';
  //   // this.append('<hr>');
  //   var html = compileTemplate(this);
  //   $('.projects').append(html);
  //
  // };

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = this.body;
    this.more = '<a class="more">MORE</a>';
    this.hr = '<hr>';

    return template(this);
  };

  Project.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    rawData.forEach(function(ele) {
      Project.all.push(new Project(ele));
    });
  };

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      articleFunctions.initIndexPage();
    } else {
      $.getJSON('data/inform.json', function(data) {
        console.log(data);
        Project.loadAll(data);
        localStorage.rawData = JSON.stringify(data);
        articleFunctions.initIndexPage();
      });
    }
  };

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

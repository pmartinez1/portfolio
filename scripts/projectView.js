(function(module){

  var articleFunctions = {};

  articleFunctions.showGlimpse = function() {
    $('.project-body *:nth-of-type(n+2)').hide();
    $('.projects').on('click','.more', function(event){
      event.preventDefault();
      $(this).parent().find('*').show();
      $(this).replaceWith('<a class="less">LESS</a>');
    });
  };

  articleFunctions.removeGlimpse = function(){
    $('.projects').on('click','.less', function(event){
      event.preventDefault();
      $('.project-body *:nth-of-type(n+2)').hide();
      $(this).replaceWith('<a class="more">MORE</a>');
    });
  };

  articleFunctions.initIndexPage = function() {
    Project.all.forEach(function(a){
      $('.projects').append(a.toHtml());
    });
    articleFunctions.showGlimpse();
    articleFunctions.removeGlimpse();
  };

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
  );
  });

  module.articleFunctions = articleFunctions;
})(window);

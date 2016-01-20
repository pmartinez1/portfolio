<script type="text/javascript">
  $(document).ready(function(){
    $('button').on('mouseover', function(){
      $('.button-one').text('small button');
      $('button').removeClass('button-one').addClass('button-two');
      console.log('moused over')
    });
    $('button').on('mouseout', function(){
      $('.button-two').text('BIGGER NOW');
      $('button').removeClass('button-two').addClass('button-one');
      console.log('moused out')
    });
  });

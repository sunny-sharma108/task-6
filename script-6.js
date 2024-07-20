$(document).ready(function() {
    $('.gallery-item').click(function() {
      var imgSrc = $(this).find('img').attr('src');
      $('#modal-img').attr('src', imgSrc);
      $('.modal').css('display', 'block');
    });
  
    $('.close').click(function() {
      $('.modal').css('display', 'none');
    });
  
    $(window).click(function(e) {
      if ($(e.target).is('.modal')) {
        $('.modal').css('display', 'none');
      }
    });
  });
  
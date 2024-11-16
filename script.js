$('input[type="text"]').focus(function() {
    $('label').animate({
      top: '-50%',
      fontSize: '12px'
    }, 300);
    $('.border-bottom').animate({
      width: '100%',
    }, 600)
  })
  
  $('input[type="text"]').blur(function() {
    if ( ! $(this).val().length ) {
      $('label').animate({
        top: '20%',
        fontSize: '20px'
      }, 300);
    }
    $('.border-bottom').animate({
      width: '0%',
    }, 600)
  })
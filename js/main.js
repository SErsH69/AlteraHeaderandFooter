$(function(){
  function burg(){
    var burgerWr = $('.burger-wrap'),
      burgerBtn = $('.burger-btn'),
      burgerBody = $('.burger-body'),
      burgerCloseBtn = $('.burger-close-btn');
    
    burgerBtn.on('click', function(){
      $(burgerWr).addClass('opened');
      $('html').addClass('owf');
    });
    
    burgerCloseBtn.on('click', function(){
      $(burgerWr).removeClass('opened');
      $('html').removeClass('owf');
    })
  }
  burg();
  $(document).on('click', function(e){
    if( $(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
    return
    $('html').removeClass('owf');
    $('.burger-wrap').removeClass('opened');
  });

  $('.header__but').on('click', function(){
    $(this).toggleClass('isOpened');
    if ($(this).hasClass('isOpened')) {
        $(this).text('Закрыть');
    } else {
        $(this).text('Каталог');
    };
    $(this).parent().find('.popups').toggleClass('isActive');
  });

  $('.site-panel-wrap .burger-wrap .burger-body__menu ul#menu-glavnoe-menyu-novoe li.menu-item-has-children').on('click', function(e) {
    $(this).toggleClass('active');
    $(this).find('> a').toggleClass('active');
  })
  $('.site-panel-wrap .burger-wrap .burger-body__menu ul#menu-glavnoe-menyu-novoe li.menu-item-has-children').on('click', '> a', function(e) {
    if($(this).hasClass('active')) {
      e.stopPropagation();
    } else {
      e.preventDefault()
    }
  })
});

$(document).ready(function(){
  if (window.innerWidth > 1023) {
    $('#menu-main_cat-1 ul.sub-menu').each(function() {
        let link = $(this).siblings('a').clone();
        let li = $('<li></li>').prepend(link).clone();
        console.log(li, window.innerWidth);
        $(this).prepend(li);
    })
  } else {
    $('#menu-main_cat > li.menu-item').first().remove();
  }
    $('.burger-body__cat').on('click', function() {
        $('.slide_menu').addClass('isOpened');
    })
    $('#js_menu').waSlideMenu({
        backOnTop: true,
        autoHeightMenu : true,
        onInit : function() {
            $('.waSlideMenu-nav > .waSlideMenu-wrapper > .waSlideMenu-menu').prepend('<li class="waSlideMenu-back slideClose"><a href="#"></a><a href="#">Каталог</a></li>');
            $('.slideClose').on('click', function() {
                $('.slide_menu').removeClass('isOpened');
            });
            $('.waSlideMenu-menu ul').each(function() {
                let link = $(this).siblings('a').clone();
                $(this).children('.waSlideMenu-back').append(link).clone();
            })
            $('.waSlideMenu-nav li:not(.menu-item-has-children, .waSlideMenu-back) > a').click(function() {
              console.log('asdasdasdasd');
              document.location.href = $(this).attr('href');
            })
            $('.waSlideMenu-nav li.menu-item-has-children > a').click(function(event) {
              event.preventDefault();
              console.log('.waSlideMenu-nav li.menu-item-has-children > a');
            })
            $('.waSlideMenu-back > a:first-child').click(function(event) {
              event.preventDefault();
              console.log('.waSlideMenu-back > a:first-child');
            });
        }
    });
 });

 $(function(){
  $('.feedback').click(function() {
      $('.fd').addClass('opened');
      return false;
  });
  $('.fd .icon-close').click(function() {
      $('.fd').removeClass('opened');
      return false;
  });
  $(document).click( function(event){
      if( $(event.target).closest('.form-wrapper-inner').length ) 
        return;
      $('.fd').removeClass('opened');
      event.stopPropagation();
  })
  $(document).keydown(function(event){
      if (event.which == 27) {
          $('.fd').removeClass('opened');
      }
  });
}); 
$(function(){
  $('.feedback2').click(function() {
      $('.fd2').addClass('opened');
      return false;
  });
  $('.fd2 .icon-close').click(function() {
      $('.fd2').removeClass('opened');
      return false;
  });
  $(document).click( function(event){
      if( $(event.target).closest('.form-wrapper-inner').length ) 
        return;
      $('.fd2').removeClass('opened');
      event.stopPropagation();
  })
  $(document).keydown(function(event){
      if (event.which == 27) {
          $('.fd2').removeClass('opened');
      }
  });
}); 
$(function(){
  $('.feedback3').click(function() {
      $('.fd').addClass('opened');
      return false;
  });
  $('.fd3 .icon-close').click(function() {
      $('.fd3').removeClass('opened');
      return false;
  });
  $(document).click( function(event){
      if( $(event.target).closest('.form-wrapper-inner').length ) 
        return;
      $('.fd3').removeClass('opened');
      event.stopPropagation();
  })
  $(document).keydown(function(event){
      if (event.which == 27) {
          $('.fd3').removeClass('opened');
      }
  });
});
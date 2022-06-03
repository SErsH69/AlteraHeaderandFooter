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
        }
    });
 });
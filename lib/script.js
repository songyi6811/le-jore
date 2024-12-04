$(function(){


    //header 2차 메뉴, search_box
    $('.nav .gnb >li').mouseenter(function(){
        // $('.depth02_wrap').stop().slideDown();
        $(this).find('.depth02_wrap').stop().slideDown(400);
    });
    $('.depth02_wrap').mouseleave(function(){
        $(this).stop().slideUp(400);
    });

    $('.search>a').click(function(){
        $('.search_box').slideToggle();
    });


    //header 스크롤 시 상단 고정
    let header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let scrollBar = window.scrollY;

        if (scrollBar > 0) {
            header.classList.add('active');
        }else {
            header.classList.remove('active');
        };
    });


    //main_visaul swiper
    var swiper = new Swiper(".mainVisual", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });


      //section02 swiper
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });


    //section02 tabmenu
    let menu =document.querySelectorAll('.section02 .nav .menu li');
    let itemWrap = document.querySelectorAll('.section02 .item_wrap');

    for(let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', () => {
            menu.forEach(item => {
                item.classList.remove('active');
            });
            menu[i].classList.add('active');

            itemWrap.forEach(item => {
                item.classList.remove('active');
            });
            itemWrap[i].classList.add('active');
        });
    };


    //section03 swiper
    var swiper = new Swiper(".section03Visual", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });


    //section04 swiper
    var swiper = new Swiper(".Review", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });


    //notice swiper
    var swiper = new Swiper(".text_slide", {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });

});//scirpt end
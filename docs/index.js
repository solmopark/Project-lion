console.clear();

function TopBar__init() {
  //탑바 스크롤 반응형
  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop == 0) {
      $('.top-bar').removeClass('hover');
    } else {
      $('.top-bar').addClass('hover')
    }
  });
}
TopBar__init();

function Slider1__init() {
  const swiper = new Swiper('.slider-1 .swiper', {
    // Optional parameters
    //direction: 'vertical', --> 이걸 지우면 수직으로 나옴

    effect: 'fade', // 페이드 효과 사용
    loop: true,
    pagination: {
      el: ".slider-1 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".slider-1 .swiper-button-next",
      prevEl: ".slider-1 .swiper-button-prev",
    },
  });
}
Slider1__init();
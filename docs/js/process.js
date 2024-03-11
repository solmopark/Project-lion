/*내비 탭*/
$('.intro').click(function(){
    let $this = $(this);
    $this.parent().siblings().children('.click').removeClass('click');
    $this.addClass('click');
    });
    $('.curr').click(function(){
    let $this = $(this);
    $this.parent().siblings().children('.click').removeClass('click');
    $this.addClass('click');
    });
    $('.faq').click(function(){
    let $this = $(this);
    $this.parent().siblings().children('.click').removeClass('click');
    $this.addClass('click');
    });
    /*내비 탭 끝*/
    /*커리큘럼*/
    $('ul > li').click(function() {
      $(this).toggleClass('active');
      
      if ( $('ul > li:not(.active)').length == 0 ) {
        $('.btn-1').text('모든 챕터 축소');
      }
      else {
        $('.btn-1').text('모든 챕터 확장');
      }
    });
    
    $('.btn-1').click(function() {
      if ( $('ul > li:not(.active)').length == 0 ) {
        $('ul > li').removeClass('active');
        $('.btn-1').text('모든 챕터 확장');
      }
      else {
        $('ul > li').addClass('active');
        $('.btn-1').text('모든 챕터 축소');
      }
    });
    $(".menu-1").click(function () {
      let ff = $(".c-icon-1-1").hasClass("active-1");
      if (ff) {
        $(".c-icon-1-1").removeClass("active-1");
        $('.c-icon-2-1').addClass('active-1');
      } else {
        $(".c-icon-2-1").removeClass("active-1");
        $('.c-icon-1-1').addClass('active-1');
      }
    });
    $(".menu-2").click(function () {
        let ff = $(".c-icon-1-2").hasClass("active-1");
      if (ff) {
        $(".c-icon-1-2").removeClass("active-1");
        $('.c-icon-2-2').addClass('active-1');
      } else {
        $(".c-icon-2-2").removeClass("active-1");
        $('.c-icon-1-2').addClass('active-1');
      }
    });
    $(".menu-3").click(function () {
        let ff = $(".c-icon-1-3").hasClass("active-1");
      if (ff) {
        $(".c-icon-1-3").removeClass("active-1");
        $('.c-icon-2-3').addClass('active-1');
      } else {
        $(".c-icon-2-3").removeClass("active-1");
        $('.c-icon-1-3').addClass('active-1');
      }
    });
    $(".menu-4").click(function () {
        let ff = $(".c-icon-1-4").hasClass("active-1");
      if (ff) {
        $(".c-icon-1-4").removeClass("active-1");
        $('.c-icon-2-4').addClass('active-1');
      } else {
        $(".c-icon-2-4").removeClass("active-1");
        $('.c-icon-1-4').addClass('active-1');
      }
    });
    /*커리큘럼 끝*/
    
    /*자주묻는질문*/
    $(".list-1").click(function () {
      let fff = $(".list-1-1").hasClass("active2");
      if (fff) {
        $(".list-1-1").removeClass("active2");
      } else {
        $(".list-1-1").addClass("active2");
      }
        let ff = $(".icon-1-1").hasClass("active3");
      if (ff) {
        $(".icon-1-1").removeClass("active3");
        $('.icon-2-1').addClass('active3');
      } else {
        $(".icon-2-1").removeClass("active3");
        $('.icon-1-1').addClass('active3');
      }
    });
    $(".list-2").click(function () {
      let fff = $(".list-2-1").hasClass("active2");
      if (fff) {
        $(".list-2-1").removeClass("active2");
      } else {
        $(".list-2-1").addClass("active2");
      }
        let ff = $(".icon-1-2").hasClass("active3");
      if (ff) {
        $(".icon-1-2").removeClass("active3");
        $('.icon-2-2').addClass('active3');
      } else {
        $(".icon-2-2").removeClass("active3");
        $('.icon-1-2').addClass('active3');
      }
    });
    $(".list-3").click(function () {
      let fff = $(".list-3-1").hasClass("active2");
      if (fff) {
        $(".list-3-1").removeClass("active2");
      } else {
        $(".list-3-1").addClass("active2");
      }
          let ff = $(".icon-1-3").hasClass("active3");
      if (ff) {
        $(".icon-1-3").removeClass("active3");
        $('.icon-2-3').addClass('active3');
      } else {
        $(".icon-2-3").removeClass("active3");
        $('.icon-1-3').addClass('active3');
      }
    });
    $(".list-4").click(function () {
      let fff = $(".list-4-1").hasClass("active2");
      if (fff) {
        $(".list-4-1").removeClass("active2");
      } else {
        $(".list-4-1").addClass("active2");
      }
          let ff = $(".icon-1-4").hasClass("active3");
      if (ff) {
        $(".icon-1-4").removeClass("active3");
        $('.icon-2-4').addClass('active3');
      } else {
        $(".icon-2-4").removeClass("active3");
        $('.icon-1-4').addClass('active3');
      }
    });
    $(".list-5").click(function () {
      let fff = $(".list-5-1").hasClass("active2");
      if (fff) {
        $(".list-5-1").removeClass("active2");
      } else {
        $(".list-5-1").addClass("active2");
      }
          let ff = $(".icon-1-5").hasClass("active3");
      if (ff) {
        $(".icon-1-5").removeClass("active3");
        $('.icon-2-5').addClass('active3');
      } else {
        $(".icon-2-5").removeClass("active3");
        $('.icon-1-5').addClass('active3');
      }
    });
    $(".list-6").click(function () {
      let fff = $(".list-6-1").hasClass("active2");
      if (fff) {
        $(".list-6-1").removeClass("active2");
      } else {
        $(".list-6-1").addClass("active2");
      }
          let ff = $(".icon-1-6").hasClass("active3");
      if (ff) {
        $(".icon-1-6").removeClass("active3");
        $('.icon-2-6').addClass('active3');
      } else {
        $(".icon-2-6").removeClass("active3");
        $('.icon-1-6').addClass('active3');
      }
    });
    $(".list-7").click(function () {
      let fff = $(".list-7-1").hasClass("active2");
      if (fff) {
        $(".list-7-1").removeClass("active2");
      } else {
        $(".list-7-1").addClass("active2");
      }
          let ff = $(".icon-1-7").hasClass("active3");
      if (ff) {
        $(".icon-1-7").removeClass("active3");
        $('.icon-2-7').addClass('active3');
      } else {
        $(".icon-2-7").removeClass("active3");
        $('.icon-1-7').addClass('active3');
      }
    });
    /*자주묻는질문 끝*/
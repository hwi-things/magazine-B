$(function () {
    /* **
     1. 변수 선언
      * */
    var banner = $("#banner"),
      slide = banner.find(".banner_slide>li"),
      slideCount = slide.length,
      stopTimer,
      current = 0;
    /* **
      2. 슬라이드 위치 설정
      * */
    // var slidePos = slide.each(function (i) {
    //   $(this).css("left", i * 100 + "%");
    // });
  
    /* **
      슬라이드 이미지부분- setinterval
      슬라이드 인덱스 번호를 반환
      * */
  
    timer();
  
    /* *
     * autoplay 함수
     * */
  
    function timer() {
      stopTimer = setInterval(function () {
        var prev = slide.eq(current);
        move(prev, 0, "-100%");
        current++; //1
        if (current == slideCount) {
          current = 0;
        }
        var next = slide.eq(current); //1
        move(next, "100%", "0%");
        cnt(current)
      }, 4000);
    }
  
    /* **
      슬라이드 애니메이트
      * */
    // function move(대상,출발,도착) {
    //   대상.css("left", 출발).stop().animate({ left: 도착 }, 1000);
    // }
    function move(tg, start, end) {
      tg.css("left", start).stop().animate({ left: end }, 2000,"easeInOutCirc");
    }
  
    /* **
      마우스 오버 시 슬라이드 정지 
      * */
  
      banner.hover(
      function () {
        $(this).addClass("on");
        clearInterval(stopTimer);
      },
      function () {
        $(this).removeClass("on");
        timer();
      }
    );
  
    /* **
     카운터 동적생성 
      * */
    var counterEl = "<h1 class='counter'>1";
    $("#wrap").append(counterEl);
    var counter= $('.counter');
    function cnt(n){
      counter.html(n+1);
    }
  }); //jQuery
  
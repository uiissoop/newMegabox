const slide = new Swiper('.swiper-container', {
  slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
  spaceBetween : 42, 
  // 슬라이드 사이 여백
  loop : true, // 슬라이드 반복 여부
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  pagination : false, // pager 여부
  navigation: {   // 버튼 사용자 지정
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // slidesOffsetBefore :  // 슬라이드 시작 부분 여백

  breakpoints : { // 반응형 설정이 가능 width값으로 조정
    1 : {
  
      spaceBetween : 46, // 슬라이드 사이 여백
    },
  },
  
  })

  // var swiper = new Swiper('.swiper-container', {
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   breakpoints: {
  //     '@0.75': {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     '@1.00': {
  //       slidesPerView: 3,
  //       spaceBetween: 40,
  //     },
  //     '@1.50': {
  //       slidesPerView: 4,
  //       spaceBetween: 50,
  //     },
  //   }
  // });


  
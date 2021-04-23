const slide = new Swiper('.swiper-container', {
  slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
  spaceBetween : 44.5, // 슬라이드 사이 여백
  loop : true, // 슬라이드 반복 여부
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  pagination : false, // pager 여부
  navigation: {   // 버튼 사용자 지정
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  slidesOffsetBefore : 4, // 슬라이드 시작 부분 여백
  })
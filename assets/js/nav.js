$('.hamburger-button').click(function() {
    $(this).toggleClass('active');
});


const header = document.querySelector('.header');
const headerTopOffset = header.offsetTop;

var mql = window.matchMedia('screen and (max-width: 768px)');


window.addEventListener('scroll', function(e) {
  // nav를 상단에 고정. (브라우저 상단의 차이가 nav와 브라우저 상단의 차이보다 클 경우)
  if (window.pageYOffset > headerTopOffset) {
      header.classList.add('header-background');

    if(mql.matches) {
        header.classList.remove('header-background');
    }

  } else {
    header.classList.remove('header-background');

  }
});
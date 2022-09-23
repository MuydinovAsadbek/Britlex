const elHeader = document.querySelector('.header');
const elOpenMenuBtn = document.querySelector('.header__open-menu-btn')
const elCloseBtn = document.querySelector('.header-column__close-btn');

if (elOpenMenuBtn) {
  elOpenMenuBtn.addEventListener('click', function() {
  elHeader.classList.add('site-header-open')
  })

  if(elCloseBtn) {
    elCloseBtn.addEventListener('click', function() {
      elHeader.classList.remove('site-header-open')
    })
  }
}
const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');
const menuPanel = document.querySelector('.menu-panel');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
}

menuOpen.addEventListener('click', () => {
  //console.log('クリックしました');
  menuPanel.animate({translate: ['100vw', 0]},menuOptions);
}); 

menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
});
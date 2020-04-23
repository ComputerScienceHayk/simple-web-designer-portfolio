// scroll nav fixed
window.onscroll = function() {
  onscrollFunction();
}
function onscrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.querySelector('nav').classList.add('nav-fixed');
  } else {
    document.querySelector('nav').classList.remove('nav-fixed');
  }
  
}



let carusel_item = document.querySelector('.carousel-inner');
let carousel_content_inner1 = document.querySelector('.carousel_content_inner1');
let carousel_content_inner2 = document.querySelector('.carousel_content_inner2');
let carousel_content_inner3 = document.querySelector('.carousel_content_inner3');
carusel_item.addEventListener('mousemove', (e) =>{

  let x = (window.innerWidth / 2 - e.pageX) / 8;
  let y = (window.innerHeight / 2 - e.pageY) / 8;
  console.log(x)
  console.log(y)
  carousel_content_inner1.style.transform = `translateY(${y}px) translateX(${x}px) `;
  carousel_content_inner2.style.transform = `translateY(${y}px) translateX(${x}px) `;
  carousel_content_inner3.style.transform = `translateY(${y}px) translateX(${x}px) `;



});



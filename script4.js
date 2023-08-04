let flag = 0;
let slides = document.getElementsByClassName("slides");

window.onload = function() {
    slides[flag].style.display = "block";
  };

  slideshow(flag);

function controller(x){
    flag = flag + x ;
    slideshow(flag);
 }


function slideshow(num){
    let slides = document.getElementsByClassName("slides");  
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;

    }
    for(let y of slides){
          y.style.display="none";
    }
    slides[num].style.display = "block";
}


const menubtn = document.getElementById('menubtn');
function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}


menubtn.addEventListener('click', toggleMenu);
menubtn.addEventListener('touchstart', toggleMenu);

const $btnMenu1 = document.querySelector('.btnMenu1')
const $btnMenu2 = document.querySelector('.btnMenu2')
const $btnMenu3 = document.querySelector('.btnMenu3')
const $btnMenu4 = document.querySelector('.btnMenu4')

$btnMenu1.addEventListener('click',function() {
  nav.classList.remove('active')
})

$btnMenu2.addEventListener('click',function() {
  nav.classList.remove('active')
})


$btnMenu3.addEventListener('click',function() {
  nav.classList.remove('active')
})


$btnMenu4.addEventListener('click',function() {
  nav.classList.remove('active')
})



let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.video-principal video');
let title = document.querySelector('.video-principal .title');

listVideo.forEach(video =>{
  video.onclick = () =>{
    listVideo.forEach(vid => vid.classList.remove('active'));
    video.classList.add('active');
    if(video.classList.contains('active')){
      let src = video.children[0].getAttribute('src');
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text
    };
  };
});


const menuItems = document.querySelectorAll('a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

let nav = document.querySelector('.nav');
let scrollup = document.querySelector('.scroll-up-btn')
let mediaside = document.querySelector('.inst-link');
let sec  =document.getElementsByTagName("section");

var alturaNav = document.getElementById('nav').offsetHeight;
var widthTotal = document.getElementById('nav').offsetWidth;
var AlturaTotal = " ";

if ( widthTotal <= 755) {
  AlturaTotal = alturaNav + 80;

}else {
  var AlturaTotal = alturaNav; 
}

window.addEventListener('scroll', function(){
  
  nav.classList.remove('active');

  if(this.window.scrollY > 34){
    nav.classList.add('sticky');
    AlturaTotal = alturaNav;

  }else if(this.window.scrollY < 34 && widthTotal <= 755 ){
    nav.classList.remove('sticky');
    AlturaTotal =  alturaNav + 80 ;
  }else {
    nav.classList.remove('sticky');

  }

  if(this.window.scrollY > 460){
    scrollup.classList.add('show');
    mediaside.classList.add('show');
  }else{
    scrollup.classList.remove('show');
    mediaside.classList.remove('show');
  }
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - AlturaTotal;
  scrollToPosition(to);
}

function scrollToPosition(to) {
 // window.scroll({
  //top: to,
  //behavior: "smooth",
   //});
  smoothScrollTo(0, to);
}

scrollup.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 1200;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}; 


const slides=document.querySelector(".slide-items").children;
    const prev=document.querySelector(".prev");
    const next=document.querySelector(".next");
    const totalSlides=slides.length;
      let index=0;
    const duration=3500;

  prev.onclick=function(){
    slide("prev")
  }

  next.onclick=function(){
    slide("next")
  }
  
  function slide(direction){
       progress();    

      if(direction=='next'){

          if(index==totalSlides-1){ 
            index=0;
          }
          else{
            index++
          }
      }

     if(direction=='prev'){

       if(index==0){
           index=totalSlides-1;
       }
       else{
          index--;
       }

     }

     
     clearInterval(timer);

     
     timer=setInterval(autoSlide,duration);

     for(let i=0; i<slides.length; i++){
      slides[i].classList.remove("active")
     }

     slides[index].classList.add("active");   
     slideInfo();
  }

  let width=100/totalSlides;
    
  function slideInfo(){
     document.querySelector(".number").innerHTML=(index+1)+"/"+totalSlides;
     document.querySelector(".inner").style.width=(index+1)*width+"%";
  }

  

   function progress(){
        document.querySelector(".progress").innerHTML='';
        const div=document.createElement("div");
              div.style.height="5px";
              div.style.width="0px";
              div.style.position="absolute";
              div.style.left="0";
              div.style.top="0";
              div.style.backgroundColor="transparent";
              div.id="progress";
              div.style.animation="progress "+ duration/1000 + "s linear";
              document.querySelector(".progress").appendChild(div);          
   }
 
    

   function autoSlide(){
       slide("next");
   }
    
   let timer=setInterval(autoSlide,duration);
  
  slideInfo();
  progress();
  
 

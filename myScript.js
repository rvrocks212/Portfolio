document.onreadystatechange = function() {
  if (document.readyState !== 'complete') {
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
      
  } else {
      setTimeout(function() {
          document.querySelector("#loader").style.display = "none";
          document.querySelector("body").style.overflow = "auto";
          document.querySelector("body").style.visibility = "visible";
      },7000); 
  }
};




const link = document.querySelectorAll('.project');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');


for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
    linkImages[i].style.transform = 'scale(1, 1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}

const lenis= new Lenis()

function raf(time){
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


let rec = document.querySelector('#section-1');
let res = document.querySelector('#section-2');
let be = document.querySelector('#section-3');
let lo = document.querySelector('#section-4');

function rest(){
  res.classList.remove('displ');
  rec.classList.add('displ');
  lo.classList.add('displ');
  be.classList.add('displ');
}
function recr(){
  rec.classList.remove('displ');
  res.classList.add('displ');
  be.classList.add('displ');
  lo.classList.add('displ');

}
function lob(){
  lo.classList.remove('displ');
  rec.classList.add('displ')
  res.classList.add('displ');
  be.classList.add('displ');
}

function ben(){
  be.classList.remove('displ');
  rec.classList.add('displ')
  res.classList.add('displ');
  lo.classList.add('displ');
 
}
function all(){
  rec.classList.remove('displ')
  // res.classList.remove('displ');
  // be.classList.remove('displ');
  // lo.classList.remove('displ');
}



// Function to check if an element is in the viewport
function isInViewports(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the active class when the section is in the viewport
function handlesScroll() {
  const sections = document.querySelector('#about-txt');
  if (isInViewports(sections)) {
    sections.classList.add('animate-txt');
  } else {
    sections.classList.remove('animate-txt'); // Optional: remove class if section goes out of view
  }
};

// Toggler mavigation menu
const ham =  document.querySelector('.hamburgers');
ham.addEventListener('click',(()=>{
    const nav = document.querySelector('#nav');
    nav.classList.toggle('act');
}))



  let tobeDisplay = document.querySelector('#dis');
  window.addEventListener('scroll',(()=>{
    if(window.scrollY > 100){
      tobeDisplay.classList.remove('disp');
    }
    else{
      tobeDisplay.classList.add('disp');
    }
  }))

function goTop(){
  window.scrollTo(0,0);
}


let fastime = document.querySelector('.rotate-box1');
fastime.addEventListener('mouseenter',(()=>{
  setTimeout(()=>{
    let fastimg = document.querySelector('.breakfast');
    fastimg.src = 'img/fasttime.png'  
  },400)
}))
fastime.addEventListener('mouseleave',(()=>{
    let fastimg = document.querySelector('.breakfast');
    fastimg.src = 'img/breakfast.png'  
}))

let lunchime = document.querySelector('.rotate-box2');
lunchime.addEventListener('mouseenter',(()=>{
  setTimeout(()=>{
    let lunchimg = document.querySelector('.lunch');
    lunchimg.src = 'img/lunchtime.png'  
  },400)
}))
lunchime.addEventListener('mouseleave',(()=>{
    let lunchimg = document.querySelector('.lunch');
    lunchimg.src = 'img/lunch.png'  
}))
let teaime = document.querySelector('.rotate-box3');
teaime.addEventListener('mouseenter',(()=>{
  setTimeout(()=>{
    let teaimg = document.querySelector('.tea');
    teaimg.src = 'img/teatime.png'  
  },400)
}))
teaime.addEventListener('mouseleave',(()=>{
    let teaimg = document.querySelector('.tea');
    teaimg.src = 'img/hitea.png'  
}))

let dinnertime = document.querySelector('.rotate-box4');
dinnertime.addEventListener('mouseenter',(()=>{
  setTimeout(()=>{
    let dinnerimg = document.querySelector('.dinner');
    dinnerimg.src = 'img/dinnertime.png'  
  },400)
}))
dinnertime.addEventListener('mouseleave',(()=>{
    let dinnerimg = document.querySelector('.dinner');
    dinnerimg.src = 'img/dinner.png'  
}))





//  Changing the color of the facility on hover
const last = document.querySelector('#last');
last.addEventListener('mouseenter',(()=>{
  const txt = document.querySelector('.facility');
  txt.style.color='black';
}))
last.addEventListener('mouseleave',(()=>{
  const txt = document.querySelector('.facility');
  txt.style.color='#d5193b';
}))

// Contact form submitted
function submitted(e){
  let thanks =   document.querySelector('.form-submit');
  let input1 =  document.querySelector('.input1').value;
  let input2 =  document.querySelector('.input2').value;
  let input3 =  document.querySelector('.input3').value;
  let input4 =  document.querySelector('.input4').value;
      if(input1 && input2 && input3 && input4 != null ){
        thanks.classList.add('bor');
        thanks.innerHTML = 'Thank you for your message'
        input1.value = '';
        input2.value = '';
        input3.value = '';
        input4.value = '';

      }
      else{
        thanks.innerHTML = 'One or more field has an error please chek again'
      }
    
}











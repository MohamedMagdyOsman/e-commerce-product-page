// variables
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const cartIcon = document.getElementById('cartIcon');
const cartMenu = document.getElementById('cartMenu');
const slides = document.getElementById('slides');
const nextSlide = document.getElementById('nextSlide');
const prevSlide = document.getElementById('prevSlide');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const counter = document.getElementById('counter');
const presentImage = document.getElementById('presentImage');
const thumbImages = document.querySelectorAll('.thumbImage');


// event listeners
openIcon.addEventListener('click', toggleSideMenu);
closeIcon.addEventListener('click', toggleSideMenu);
cartIcon.addEventListener('click', toggleCartMenu);
nextSlide.addEventListener('click', getNextSlide);
prevSlide.addEventListener('click', getPrevSlide);
plus.addEventListener('click', counterPlus);
minus.addEventListener('click', counterMinus);


// switch image grid main image
thumbImages.forEach((thumbImage, index) => {
  thumbImage.addEventListener('click', () => {
    presentImage.src = `./images/image-product-${index + 1}.jpg`;
  });
});


// functions
function toggleSideMenu() {
  overlay.classList.toggle('hidden');
  sidebar.classList.toggle('-translate-x-full');
}

function toggleCartMenu() {
  cartMenu.classList.toggle('hidden');
}

function getNextSlide() {
  let currentSlide = parseInt(slides.getAttribute('data-slide'));

  if (currentSlide == 3) {
    return;
  }
  
  slides.style.transform = `translateX(-${(currentSlide + 1) * 100}vw)`;
  slides.setAttribute(`data-slide`, currentSlide + 1);
  prevSlide.classList.add('text-white');
  prevSlide.classList.remove('text-gray-400');

  if (currentSlide == 2) {
    nextSlide.classList.remove('text-white');
    nextSlide.classList.add('text-gray-400');
  }
}

function getPrevSlide() {
  let currentSlide = parseInt(slides.getAttribute('data-slide'));

  if (currentSlide == 0) {
    return;
  }
  
  slides.style.transform = `translateX(-${(currentSlide - 1) * 100}vw)`;
  slides.setAttribute(`data-slide`, currentSlide - 1);
  nextSlide.classList.add('text-white');
  nextSlide.classList.remove('text-gray-400');

  if (currentSlide == 1) {
    prevSlide.classList.remove('text-white');
    prevSlide.classList.add('text-gray-400');
  }
}

function counterPlus() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

function counterMinus() {
  if (parseInt(counter.innerText) == 0) {
    return;
  }
  counter.innerText = parseInt(counter.innerText) - 1;
}
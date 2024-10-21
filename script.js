let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}
function toggleSearchDrawer() {
  const drawer = document.getElementById('searchDrawer');
  drawer.classList.toggle('open');
}

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const clickableImages = document.querySelectorAll('.clickable-image');

clickableImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block'; 
        modalImg.src = image.src;
    });
});
function closeModal() {
    modal.style.display = 'none'; 
}
modal.addEventListener('click', (event) => {
    if (event.target !== modalImg) {
        closeModal();
    }
});
function showTab(tab) {
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');
    var tabs = document.getElementsByClassName('tab');
    
    if (tab === 'login') {
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}

// alert("Blah blah")
const navigation =`
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact Us</li>
</ul>`
const nav = document.createElement("nav");
nav.innerHTML = navigation;
document.querySelector("header").appens(nav);


let currentIndex = 1;
const slides = document.querySelectorAll('.rectangle');
const totalSlides = slides.length;
const slideWidth = 120; // Adjust based on rectangle width + margin
let clickCount = 0;

function moveCarousel(direction) {
  currentIndex += direction;
  clickCount++;

  if (currentIndex < 1) {
    currentIndex = totalSlides;
    document.querySelector('.carousel').style.transform = `translateX(${-totalSlides * slideWidth}px)`;
  } else if (currentIndex > totalSlides) {
    currentIndex = 1;
    document.querySelector('.carousel').style.transform = 'translateX(0)';
  } else {
    const offset = -(currentIndex - 1) * slideWidth;
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
  }

  if (clickCount >= 3) {
    currentIndex = 1;
    document.querySelector('.carousel').style.transform = 'translateX(0)';
    clickCount = 0;
  }
}
function OpenModel() {
    var menu = document.getElementById("burgermenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  }
  
  // Закрывать меню при клике вне меню
  document.addEventListener("mouseup", function (event) {
    var menu = document.getElementById("burgermenu");
    var icon = document.querySelector(".burger-menu i");
  
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.style.display = "none";
    }
  });
  

 // Отображаем стрелку при прокрутке
window.addEventListener('scroll', function() {
  var arrow = document.getElementById('arrow');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrow.style.display = 'block';
  } else {
    arrow.style.display = 'none';
  }
});

// Плавный переход к верхней части страницы при клике на стрелку
document.getElementById('arrow').addEventListener('click', function() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для других браузеров
});
 



const sun = document.getElementById("sun")
const moon = document.getElementById("moon")
const h1theme = document.getElementById("h1theme")
const body = document.body
function Changemoon(){
  body.classList.toggle('moon')
  h1theme.style.color = "#fff"

}
function Changesun(){
  body.classList.toggle('sun')
  h1theme.style.color = "#000"

}







function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // If the element is in view, trigger the animation
      anime({
        targets: '.card-activate',
        translateY: -50,
        easing: 'easeInOutSine',
        duration: 500
      });

      // Stop observing once triggered (optional)
      observer.unobserve(entry.target);
    }
  });
}

// Create an intersection observer instance
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5 // Adjust the threshold as needed
});

// Target the element you want to observe
const targetElement = document.querySelector('.card-activate');

// Start observing the target element
if (targetElement) {
  observer.observe(targetElement);
}


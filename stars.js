(function stars() {
let count = 500;
let i = 0;
while(i < count) {
  let scene = document.querySelector('.scene');
  let star = document.createElement('i');
  let x = Math.floor(Math.random() * window.innerWidth); // it will return the value of x axis from 0 to 100% for the width
  let y = Math.floor(Math.random() * window.innerHeight); // it will return the value of y axis from 0 to 100% for the height
  let size = Math.random() * 2; // random number from 0 to 2 
  let duration = Math.random() * 10; // random number from 0 to 10

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.animationDuration = 5 + `${duration}s`; // -> 53.1476s

  star.style.animationDelay = `${duration}s`;

  scene.appendChild(star);
  i++
  }
})() 
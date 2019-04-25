const sections = document.querySelectorAll('section');
const turret = document.getElementById('turret');
const firstTank = document.getElementById('first_tank');
const secondTank = document.getElementById('second_tank');
let lastPos = 0;

// for (const section of sections) {
//   section.addEventListener('mouseenter', event => {
//     const turretDirection = section.dataset.turretdirection;
//     turret.classList.add(`turret_${turretDirection}`);
//   });
//
//   section.addEventListener('mouseleave', event => {
//     const turretDirection = section.dataset.turretdirection;
//     turret.classList.remove(`turret_${turretDirection}`);
//   });
// }
const currentScrollTop = window.pageYOffset;
window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);

  if (currentScrollTop < window.pageYOffset) {
    firstTank.style.transform = `translateX(${lastPos}px)`;
    secondTank.style.transform = `translateX(${lastPos}px)`;
    lastPos += 2;
  }
  if (currentScrollTop > window.pageYOffset) {
    firstTank.style.transform = `translateX(${lastPos}px)`;
    secondTank.style.transform = `translateX(${lastPos}px)`;
    lastPos -= 2;
  }
  console.log(window.pageYOffset);
});

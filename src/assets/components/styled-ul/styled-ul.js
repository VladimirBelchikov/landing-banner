const styledLi = document.querySelectorAll('.styled-ul__li');
const breakpoint = window.matchMedia('(max-width: 575px)');

let iteration = 0;
let intervalId = 0;

const changeActiveClassHandler = () => {
  if (!styledLi) return;

  if (styledLi[iteration].classList.contains('styled-ul__li_active')) {
    styledLi[iteration].classList.remove('styled-ul__li_active');
    if (styledLi[iteration + 1] === undefined) {
      iteration = 0;
      styledLi[iteration].classList.add('styled-ul__li_active');
    } else {
      styledLi[iteration + 1].classList.add('styled-ul__li_active');
      iteration++;
    }
  }
}

if (breakpoint.matches === true) {
  styledLi[0].classList.add('styled-ul__li_active');
  intervalId = setInterval(changeActiveClassHandler, 3000);
}

breakpoint.addEventListener('change', () => {
  if (breakpoint.matches === true) {
    styledLi[0].classList.add('styled-ul__li_active');
    intervalId = setInterval(changeActiveClassHandler, 3000);
  } else {
    clearInterval(intervalId);
    const el = document.querySelector('.styled-ul__li.styled-ul__li_active');
    if (el) el.classList.remove('styled-ul__li_active');
    iteration = 0;
  }
})

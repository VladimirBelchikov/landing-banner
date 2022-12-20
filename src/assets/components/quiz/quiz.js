import Swiper, { Navigation } from 'swiper';

/* eslint-disable class-methods-use-this */

class Quiz {
  constructor(props) {
    this.completeText = props.completeText;
  }

  obj = {
    diesel: {
      maxWeight: {
        question: 'Какая грузоподъёмность?',
        answers: ['1.5/1.8 тонн', '2/2.5 тонны', '3/3,5 тонны', '4 тонн', '5 тонн', '6 тонн', '7 тонн', '8 тонн', '10 тонн', 'более 10 тонн'],
      },
      maxHeight: {
        question: 'Какая высота подъема требуется?',
        answers: ['3 метра', '4.5 метра'],
      },
      engine: {
        question: 'Какой двигатель предпочтительней?',
        answers: ['Качественный китай (бюджетно)', 'Япония (дороже)'],
      },
      cabin: {
        question: 'Требуется ли кабина?',
        answers: ['С кабиной', 'Без кабины'],
      },
    },
    benz: {
      maxWeight: {
        question: 'Какая грузоподъёмность?',
        answers: ['1.5/1.8 тонн', '2/2.5 тонны', '3/3,5 тонны'],
      },
      maxHeight: {
        question: 'Какая высота подъема требуется?',
        answers: ['3 метра', '4.5 метра', '6 метров', '7 метров'],
      },
      gaz: {
        question: 'Нужно ли газобалонное оборудование?',
        answers: ['Да', 'Нет', 'Затрудняюсь ответить'],
      },
      cabin: {
        question: 'Требуется ли кабина?',
        answers: ['С кабиной', 'Без кабины'],
      },
    },
    electro: {
      maxWeight: {
        question: 'Какая грузоподъёмность?',
        answers: ['1.5/1.8 тонн', '2/2.5 тонны', '3/3,5 тонны', '5 тонн', '6 тонн', '7 тонн', '8 тонн'],
      },
      maxHeight: {
        question: 'Какая высота подъема требуется?',
        answers: ['3 метра', '4.5 метра', '6 метров', '7 метров'],
      },
      foot: {
        question: 'Какое количество опор необходимо?',
        answers: ['3 опоры', '4 опоры', 'Затрудняюсь ответить'],
      },
      battery: {
        question: 'Какой тип АКБ предпочтительней?',
        answers: ['Кислотная батарея', 'Литиевая батарея', 'Затрудняюсь ответить'],
      },
    },
    storage: {
      maxWeight: {
        question: 'Какая грузоподъёмность?',
        answers: ['1,5 тонны', '2 тонны'],
      },
      maxHeight: {
        question: 'Какая высота подъема требуется?',
        answers: ['2,5 метра', '3 метра', '4 метра', '5 метров', '6 метров', '9 метров', '12 метров'],
      },
      battery: {
        question: 'Какой тип АКБ предпочтительней?',
        answers: ['Кислотная батарея', 'Литиевая батарея', 'Гелевая батарея', 'Затрудняюсь ответить'],
      },
    },
    howToBuy: ['За наличные', 'Банковский перевод', 'Планирую покупку в лизинг', 'Не уверен с ответом'], // Он общий, поэтому можно его везде не дублировать, по идее
  };

  container = document.querySelector('.quiz > .swiper');

  isChecked() {
    const thisSlide = this.container.querySelector('.swiper-slide-active');
    const checked = thisSlide.querySelector('input[type="radio"]:checked');
    return checked === null;
  }

  getInterview(quiz) {
    let leadMessage = '';
    const cards = quiz.querySelectorAll('.quiz-card');
    cards.forEach((card) => {
      const questionText = card.querySelector('.quiz-card__question').textContent;
      const answer = card.querySelector('input[type="radio"]:checked').value;
      leadMessage += `Вопрос: ${questionText}\nОтвет: ${answer}\n\n`;
    });
    return leadMessage;
  }

  init() {
    if (this.container) {
      const navButtonsContainer = this.container.querySelector('.quiz__nav-buttons');
      const navButtonPrev = navButtonsContainer.firstElementChild;
      const navButtonNext = navButtonsContainer.lastElementChild;

      const swiper = new Swiper(this.container, {
        direction: 'horizontal',
        spaceBetween: 60,
        allowTouchMove: false,
        navigation: {
          prevEl: navButtonPrev,
          nextEl: navButtonNext,
        },
        modules: [Navigation],
      });
      navButtonNext.setAttribute('disabled', 'true');

      swiper.on('beforeTransitionStart', () => {
        navButtonNext.classList.add('button_disabled');
        navButtonNext.setAttribute('disabled', 'true');
        if (!this.isChecked()) {
          navButtonNext.classList.remove('button_disabled');
          navButtonNext.removeAttribute('disabled');
        }
      });

      const radioButtons = this.container.querySelectorAll('.quiz-card__input[type="radio"]');
      radioButtons.forEach((radio) => {
        radio.addEventListener('click', () => {
          if (swiper.isEnd) {
            const completeCard = this.container.querySelector('.quiz__complete-card');
            completeCard.classList.remove('visually-hidden');
            completeCard.classList.add('quiz__complete-card_active');
            this.container.querySelector('input[name=note]').value = this.getInterview(this.container);
          }
          swiper.slideNext();
        });
      });
    }
  }
}

export default Quiz;

import Swiper, { Navigation } from 'swiper';

/* eslint-disable class-methods-use-this */

class Quiz {
  constructor(props) {
    this.completeText = props.completeText;
    this.obj = {
      diesel: [
        {
          question: 'Какая грузоподъёмность?',
          answers: ['1.5/1.8 тонн', '2/2.5 тонны', '3/3,5 тонны', '4 тонн', '5 тонн', '6 тонн', '7 тонн', '8 тонн', '10 тонн', 'более 10 тонн'],
        },
        {
          question: 'Какая высота подъема требуется?',
          answers: ['3 метра', '4.5 метра'],
        },
        {
          question: 'Какой двигатель предпочтительней?',
          answers: ['Качественный китай (бюджетно)', 'Япония (дороже)'],
        },
        {
          question: 'Требуется ли кабина?',
          answers: ['С кабиной', 'Без кабины'],
        },
        {
          question: 'Как планируете приобретать технику?',
          answers: ['За наличные', 'Банковский перевод', 'Планирую покупку в лизинг', 'Не уверен с ответом'],
        },
      ],
      benz: [
        {
          question: 'Какая грузоподъёмность?',
          answers: ['1.5/1.8 тонн', '2/2.5 тонны', '3/3,5 тонны'],
        },
        {
          question: 'Какая высота подъема требуется?',
          answers: ['3 метра', '4.5 метра', '6 метров', '7 метров'],
        },
        {
          question: 'Нужно ли газобалонное оборудование?',
          answers: ['Да', 'Нет', 'Затрудняюсь ответить'],
        },
        {
          question: 'Требуется ли кабина?',
          answers: ['С кабиной', 'Без кабины'],
        },
        {
          question: 'Как планируете приобретать технику?',
          answers: ['За наличные', 'Банковский перевод', 'Планирую покупку в лизинг', 'Не уверен с ответом'],
        },
      ],
      electro: [
        {
          question: 'Какая грузоподъёмность?',
          answers: ['1.5/1.8 тонн', '2/2.5 тонны', '3/3,5 тонны', '5 тонн', '6 тонн', '7 тонн', '8 тонн'],
        },
        {
          question: 'Какая высота подъема требуется?',
          answers: ['3 метра', '4.5 метра', '6 метров', '7 метров'],
        },
        {
          question: 'Какое количество опор необходимо?',
          answers: ['3 опоры', '4 опоры', 'Затрудняюсь ответить'],
        },
        {
          question: 'Какой тип АКБ предпочтительней?',
          answers: ['Кислотная батарея', 'Литиевая батарея', 'Затрудняюсь ответить'],
        },
        {
          question: 'Как планируете приобретать технику?',
          answers: ['За наличные', 'Банковский перевод', 'Планирую покупку в лизинг', 'Не уверен с ответом'],
        },
      ],
      storage: [
        {
          question: 'Какая грузоподъёмность?',
          answers: ['1,5 тонны', '2 тонны'],
        },
        {
          question: 'Какая высота подъема требуется?',
          answers: ['2,5 метра', '3 метра', '4 метра', '5 метров', '6 метров', '9 метров', '12 метров'],
        },
        {
          question: 'Какой тип АКБ предпочтительней?',
          answers: ['Кислотная батарея', 'Литиевая батарея', 'Гелевая батарея', 'Затрудняюсь ответить'],
        },
        {
          question: 'Как планируете приобретать технику?',
          answers: ['За наличные', 'Банковский перевод', 'Планирую покупку в лизинг', 'Не уверен с ответом'],
        },
      ],
    };
    this.container = document.querySelector('.quiz > .swiper');
    this.swiper = new Swiper(this.container, {
      direction: 'horizontal',
      spaceBetween: 60,
      allowTouchMove: false,
      modules: [Navigation],
    });
  }

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
      // const navButtonsContainer = this.container.querySelector('.quiz__nav-buttons');
      // const navButtonPrev = navButtonsContainer.firstElementChild;
      // const navButtonNext = navButtonsContainer.lastElementChild;
      // navButtonNext.setAttribute('disabled', 'true');
      // swiper.on('beforeTransitionStart', () => {
      //   navButtonNext.classList.add('button_disabled');
      //   navButtonNext.setAttribute('disabled', 'true');
      //   if (!this.isChecked()) {
      //     navButtonNext.classList.remove('button_disabled');
      //     navButtonNext.removeAttribute('disabled');
      //   }
      // });

      const radioButtons = this.container.querySelectorAll('.quiz-card__input[type="radio"]');
      radioButtons.forEach((radio) => {
        radio.addEventListener('click', () => {
          this.renderSlides(radio.dataset.branch);
          this.swiper.update();
          this.swiper.slideNext();
        });
      });
    }
  }

  getTitle(textContent) {
    return `<p class='quiz-card__question'>${textContent}</p>`;
  }

  getLabels(contentArray) {
    const labelList = [];
    contentArray.forEach((item) => {
      labelList.push(
        `<label class="quiz-card__answers-container">
          <input type="radio" class="quiz-card__input" name="${item}" value="${item}">
          <span class="quiz-card__text">${item}</span>
        </label>`,
      );
    });
    return labelList;
  }

  renderSlides(branch) {
    this.obj[branch].forEach((item) => {
      const slide = document.createElement('div');
      slide.classList.add('quiz-card', 'swiper-slide');
      const labelsContainer = document.createElement('div');
      labelsContainer.classList.add('quiz-card__answers-container');
      const questionsSlide = this.getTitle(item.question);
      const labelsSlide = this.getLabels(item.answers);
      slide.insertAdjacentHTML('beforeend', questionsSlide);
      labelsSlide.forEach((label) => {
        labelsContainer.insertAdjacentHTML('beforeend', label);
      });
      slide.appendChild(labelsContainer);
      this.container.querySelector('.swiper-wrapper').appendChild(slide);
    });
    const radioButtons = this.container.querySelectorAll('.quiz-card__input[type=radio]');
    radioButtons.forEach((radio) => {
      radio.addEventListener('click', () => {
        if (this.swiper.isEnd) {
          const completeCard = this.container.querySelector('.quiz__complete-card');
          completeCard.classList.remove('visually-hidden');
          completeCard.classList.add('quiz__complete-card_active');
          this.container.querySelector('input[name=note]').value = this.getInterview(this.container);
        }
        this.swiper.slideNext();
      });
    });
  }
}

export default Quiz;

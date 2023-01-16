import Swiper, { Navigation } from 'swiper';

/* eslint-disable class-methods-use-this */

class Quiz {
  constructor(props) {
    this.completeText = props.completeText;
    this.obj = {
      mini: [
        {
          question: 'Где планируете использовать мини-погрузчик?',
          answers: ['Сельском хозяйстве', 'ЖКХ', 'Строительстве', 'Ремонтные работы', 'Дорожные работы', 'Другое'],
        },
        {
          question: 'Какая грузоподъемность погрузчика необходима?',
          answers: ['850 кг', '950 кг', '1250 кг', 'Затрудняюсь ответить, нужно обсудить'],
        },
        {
          question: 'Нужно дополнительное навесное оборудование?',
          answers: ['Да', 'Нет'],
        },
        {
          question: 'Как срочно нужна техника?',
          answers: ['Готов забрать сегодня из наличия', 'В течение 2 недель', 'В течение месяца', 'Немного позже, детали расскажу менеджеру'],
        },
        {
          question: 'Как планируете приобретать технику?',
          answers: ['Прямая оплата', 'Лизинг', 'Готов рассмотреть оба варианта'],
        },
      ],
      frontal: [
        {
          question: 'Где планируете использовать фронтальный погрузчик?',
          answers: ['Сельском хозяйстве', 'ЖКХ', 'Строительстве', 'Ремонтные работы', 'Дорожные работы', 'Другое'],
        },
        {
          question: 'Какая грузоподъемность погрузчика подходит?',
          answers: ['3 тонны', '3,5 тонны', '5 тонн', '6 тонн', 'Затрудняюсь ответить, нужно обсудить'],
        },
        {
          question: 'Нужно дополнительное навесное оборудование?',
          answers: ['Да', 'Нет'],
        },
        {
          question: 'Как срочно нужна техника?',
          answers: ['Готов забрать сегодня из наличия', 'В течение 2 недель', 'В течение месяца', 'Немного позже, детали расскажу менеджеру'],
        },
        {
          question: 'Как планируете приобретать технику?',
          answers: ['Прямая оплата', 'Лизинг', 'Готов рассмотреть оба варианта'],
        },
      ],
      crawler: [
        {
          question: 'Где планируете использовать гусеничный экскаватор?',
          answers: ['Сельском хозяйстве', 'ЖКХ', 'Строительстве', 'Ремонтные работы', 'Дорожные работы', 'На карьере/разрезе', 'Другое'],
        },
        {
          question: 'Какая модель вам нужна?',
          answers: ['6 тонн (габарит)', '16 тонн (габарит)', '23 тонны (габарит)', '23 тонны', '30 тонн', '37 тонн', '52 тонны', 'Затрудняюсь ответить'],
        },
        {
          question: 'Какое количество опор необходимо?',
          answers: ['3 опоры', '4 опоры', 'Затрудняюсь ответить'],
        },
        {
          question: 'Как срочно нужна техника?',
          answers: ['Готов забрать сегодня из наличия', 'В течение 2 недель', 'В течение месяца', 'Немного позже, детали расскажу менеджеру'],
        },
        {
          question: 'Как планируете приобретать технику?',
          answers: ['Прямая оплата', 'Лизинг', 'Готов рассмотреть оба варианта'],
        },
      ],
      buldozer: [
        {
          question: 'Где планируете использовать бульдозер?',
          answers: ['Сельском хозяйстве', 'ЖКХ', 'Строительстве', 'Ремонтные работы', 'Дорожные работы', 'На карьере/разрезе', 'Другое'],
        },
        {
          question: 'Какая модель вам нужна?',
          answers: ['18 тонн', '24 тонны', '24 тонны (треугольная гусеница)', '37 тонн', '37 тонн (треугольная гусеница)', '49 тонн (эксклюзив)'],
        },
        {
          question: 'Как срочно нужна техника?',
          answers: ['Готов забрать сегодня из наличия', 'В течение 2 недель', 'В течение месяца', 'Немного позже, детали расскажу менеджеру'],
        },
        {
          question: 'Как планируете приобретать технику?',
          answers: ['Прямая оплата', 'Лизинг', 'Готов рассмотреть оба варианта'],
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

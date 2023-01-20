import { setUtmsToCookie, getUtmsFromCookie } from './utms.js';
import { getCookie } from './cookie.js';
import YandexMetrika from './analytics/yandex-metrika.js';
import MailRuCounter from './analytics/mail-ru-counter.js';

/* eslint-disable class-methods-use-this */
export default class FormSender {
  constructor(props) {
    setUtmsToCookie();
    this.utms = getUtmsFromCookie();
    this.loading = false;
    this.createLeadUrl = props.createLeadUrl;
    this.googleRecaptchaKey = props.googleRecaptchaKey || null;

    this.data = {
      group_id: props.group_id,
      source: props.source,
      type: props.type,
      utm_campaign: this.utms.utm_campaign || '',
      utm_term: this.utms.utm_term || '',
      utm_medium: this.utms.utm_medium || '',
      utm_content: this.utms.utm_content || '',
      utm_source: this.utms.utm_source || '',
      ua: window.navigator.userAgent,
      timezone: `МСК ${this.getTimezone()}`,
    };
  }

  getTimezone() {
    let timezone = -(new Date().getTimezoneOffset()) / 60 - 3;
    const sign = timezone < 0 ? '' : '+';
    timezone = sign + timezone;
    return timezone;
  }

  validatePhone(phone) {
    const pattern = /^(8|\+7)(\(\d{3}\))(\d{3})-(\d{2})-(\d{2})$/;
    return pattern.test(phone);
  }

  createFormData(form, delay) {
    const formData = new FormData(form);
    formData.append('delay', delay);
    formData.append('city', window.ymaps?.geolocation?.city);
    formData.append('roistat_id', getCookie('roistat_visit'));
    formData.append('ya_client_id', YandexMetrika.getYaMetrikaClientId());
    Object.entries(this.data)
      .forEach(([key, value]) => {
        formData.append(key, value);
      });
    return formData;
  }

  downloadFile(url) {
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', url);
    downloadLink.setAttribute('download', 'Коммерческое предложение');
    downloadLink.click();
  }

  postForm(formData, submitButton = undefined) {
    if (!this.loading) {
      this.loading = true;
      if (submitButton) this.disableButton(submitButton);
      if (submitButton.classList.contains('download-file-button')) this.downloadFile('assets/Catalog.pdf');
      fetch(this.createLeadUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })
        .then(() => {
          if (formData.get('delay') === '0') {
            YandexMetrika.reachGoal('supercel');
            MailRuCounter.reachGoal('supercel');

            this.enableButton(submitButton, 'Заявка отправлена', true);
            globalThis.location.href = '/thank.html';
          }
        })
        .catch((err) => {
          // TODO обработать ошибку, выдать пользователю сообщение об отправке
          if (formData.get('delay') === '0') {
            this.enableButton(submitButton, 'Повторить отправку', false);
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  disableButton(submitButton) {
    const button = submitButton;
    button.textContent = 'Подождите...';
    button.setAttribute('disabled', true);
  }

  enableButton(submitButton, textContent, isSent) {
    const button = submitButton;
    button.textContent = textContent;
    if (!isSent) button.removeAttribute('disabled');
  }

  async checkGrecaptchaKey(token) {
    const body = `token=${encodeURIComponent(token)}`;

    const response = await fetch('/recaptcha.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body,
    });

    return response.json();
  }

  init() {
    document.querySelectorAll('form')
      .forEach((form) => {
        const phoneField = form.querySelector('input[type=tel]');
        const submitButton = form.querySelector('button[type=submit]');
        const buttonDefaultText = submitButton.textContent;

        phoneField?.addEventListener('focus', (event) => {
          if (event.target.classList.contains('invalid')) {
            event.target.classList.remove('invalid');
            submitButton.textContent = buttonDefaultText;
          }
          if (form.querySelector('div.error-input') !== null) {
            document.querySelectorAll('div.error-input')
              .forEach((elem) => {
                elem.remove();
              });
          }
        });

        form.addEventListener('submit', (event) => {
          event.preventDefault();
          if (!this.validatePhone(phoneField.value)) {
            if (phoneField.classList.contains('invalid')) return;
            phoneField.classList.add('invalid');
            submitButton.textContent = 'Ошибка';
            return;
          }
          const formData = this.createFormData(form, 0);
          if (!window.grecaptcha || !this.googleRecaptchaKey) {
            this.postForm(formData, submitButton);
          } else {
            window.grecaptcha.ready(() => {
              window.grecaptcha.execute(
                this.googleRecaptchaKey,
                { action: 'submit' },
              )
                .then(async (token) => {
                  const { success } = await this.checkGrecaptchaKey(token);
                  if (success) {
                    this.postForm(formData, submitButton);
                  } else {
                    // eslint-disable-next-line no-alert
                    alert('Сайт посчитал вас роботом, пожалуйста обновите страницу');
                  }
                });
            });
          }
        });
      });
  }
}

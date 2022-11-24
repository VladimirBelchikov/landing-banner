import { setCookie, getCookie } from './cookie.js';

export const setUtmsToCookie = () => {
  if (!window.location.search) return;
  const search = window.location.search.replace('?', '').split('&');
  search.forEach((value) => {
    if (value.includes('utm')) {
      const data = value.split('=');
      setCookie(data[0], data[1], 5);
    }
  });
};

export const getUtmsFromCookie = () => ({
  utm_source: getCookie('utm_source'),
  utm_campaign: getCookie('utm_campaign'),
  utm_content: getCookie('utm_content'),
  utm_medium: getCookie('utm_medium'),
  utm_term: getCookie('utm_term'),
});

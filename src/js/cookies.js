document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('js-cookies');
  const btnAccept = document.getElementById('js-acceptCookies');
  const btnDecline = document.getElementById('js-declineCookies');

  if (banner && btnAccept && btnDecline) {
    const cookiesStatus = localStorage.getItem('cookiesAccepted');

    // Якщо вже є вибір (true або false) — не показуємо банер
    if (cookiesStatus !== null) {
      banner.style.display = 'none';
    }

    btnAccept.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true'); // прийнято
      banner.style.display = 'none';
    });

    btnDecline.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'false'); // відхилено
      banner.style.display = 'none';
    });
  }
});

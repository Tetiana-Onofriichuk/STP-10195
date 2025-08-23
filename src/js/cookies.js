document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookies');
  const btnAccept = document.getElementById('acceptCookies');
  const btnDecline = document.getElementById('declineCookies');

  if (banner && btnAccept && btnDecline) {
    if (localStorage.getItem('cookiesAccepted')) {
      banner.style.display = 'none';
    }

    btnAccept.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.style.display = 'none';
    });

    btnDecline.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  }
});

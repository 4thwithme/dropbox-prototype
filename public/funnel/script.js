// Shared interactions for the Share & Earn funnel
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Get-started form -> show success state (demo, no backend)
  var form = document.querySelector('#startForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = document.querySelector('#formSuccess');
      var email = (form.querySelector('input[type=email]') || {}).value || 'your inbox';
      if (ok) {
        ok.style.display = 'block';
        ok.textContent = '🎉 You\'re in! We sent a setup link to ' + email + '. Set your price and start earning.';
        ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }
});

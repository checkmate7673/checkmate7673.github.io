(function () {
  function isContactLink(a) {
    if (!a || !a.getAttribute) return false;
    var href = a.getAttribute('href') || '';
    return href === '/contact' || href === '/contact/' || href.endsWith('/contact') || href.endsWith('/contact/');
  }
  document.addEventListener('click', function (event) {
    var a = event.target && event.target.closest ? event.target.closest('a') : null;
    if (isContactLink(a)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = '/contact/';
    }
  }, true);
})();

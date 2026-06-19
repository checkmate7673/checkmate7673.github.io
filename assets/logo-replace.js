
(function(){
  function replaceLogo(){
    var headers = document.querySelectorAll('header');
    headers.forEach(function(header){
      var link = header.querySelector('a[href="/"]');
      if (!link || link.dataset.logoReplaced === '1') return;
      var text = (link.textContent || '').trim();
      var likelyBrand = /CP|Specialty/i.test(text) || link.querySelector('div');
      if (!likelyBrand) return;
      link.dataset.logoReplaced = '1';
      link.className = 'flex items-center';
      link.setAttribute('aria-label','CP Specialty Products Home');
      link.innerHTML = '';
      var img = document.createElement('img');
      img.src = '/assets/cp-specialty-products-logo.png';
      img.alt = 'CP Specialty Products';
      img.style.height = '72px';
      img.style.width = 'auto';
      img.style.maxWidth = 'min(78vw, 470px)';
      img.style.display = 'block';
      img.style.objectFit = 'contain';
      img.style.padding = '2px 0';
      link.appendChild(img);
    });
  }

  function adjustHeaderHeight(){
    document.querySelectorAll('header .h-16').forEach(function(el){
      el.style.minHeight = '96px';
      el.style.height = '96px';
    });
  }

  function run(){
    replaceLogo();
    adjustHeaderHeight();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  var obs = new MutationObserver(function(){ replaceLogo(); adjustHeaderHeight(); });
  obs.observe(document.documentElement, {childList:true, subtree:true});
  window.addEventListener('load', run);
})();

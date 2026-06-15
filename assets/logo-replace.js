(function(){
  function replaceLogo(){
    var headers = document.querySelectorAll('header');
    headers.forEach(function(header){
      var link = header.querySelector('a[href="/"]');
      if (!link) return;

      var text = (link.textContent || '').trim();
      var likelyBrand = /CP|Specialty/i.test(text) || link.querySelector('div') || link.querySelector('img');
      if (!likelyBrand) return;

      link.dataset.logoReplaced = '1';
      link.className = 'flex items-center';
      link.setAttribute('aria-label','CP Specialty Products Home');
      link.innerHTML = '';

      var img = document.createElement('img');
      img.src = '/assets/cp-specialty-products-logo.png?v=plain-logo-2';
      img.alt = 'CP Specialty Products';
      img.style.height = '56px';
      img.style.width = 'auto';
      img.style.maxWidth = 'min(72vw, 520px)';
      img.style.display = 'block';
      img.style.objectFit = 'contain';
      img.style.padding = '2px 0';
      link.appendChild(img);
    });
  }

  function adjustHeaderHeight(){
    document.querySelectorAll('header .h-16').forEach(function(el){
      el.style.minHeight = '72px';
      el.style.height = '72px';
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

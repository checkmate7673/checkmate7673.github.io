(function(){
  function addSupportLink(){
    document.querySelectorAll('header nav').forEach(function(nav){
      if (nav.querySelector('a[href="/support/"]') || nav.querySelector('a[href="/support"]')) return;
      var contact = Array.prototype.find.call(nav.querySelectorAll('a'), function(a){
        var h = a.getAttribute('href') || '';
        return h === '/contact' || h === '/contact/';
      });
      var link = document.createElement('a');
      link.href = '/support/';
      link.textContent = 'Support';
      link.className = 'hover:text-primary';
      if (contact) nav.insertBefore(link, contact); else nav.appendChild(link);
    });
  }
  function addSupportFooter(){
    document.querySelectorAll('footer').forEach(function(footer){
      if (footer.querySelector('[data-support-footer]')) return;
      var wrap = document.createElement('div');
      wrap.setAttribute('data-support-footer','1');
      wrap.style.marginTop='0.5rem';
      wrap.style.fontSize='0.875rem';
      wrap.innerHTML='Need product, order, billing, or payment help? <a href="/support/" style="text-decoration:underline;font-weight:600">Customer Support</a>';
      footer.appendChild(wrap);
    });
  }
  function run(){ addSupportLink(); addSupportFooter(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',run); else run();
  new MutationObserver(run).observe(document.documentElement,{childList:true,subtree:true});
})();

// Small script for mobile nav toggle and dynamic year
document.addEventListener('DOMContentLoaded',function(){
  var toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(function(btn){
    btn.addEventListener('click',function(){
      var id = this.id.replace('nav-toggle','site-nav');
      // support different nav ids used in pages
      var nav = document.querySelector('#'+this.nextElementSibling?.id) || document.querySelector('.site-nav');
      if(nav) nav.classList.toggle('show');
    });
  });
  var years = document.querySelectorAll('[id^="year"]');
  years.forEach(function(el){ el.textContent = new Date().getFullYear(); });
});

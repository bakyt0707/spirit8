 $('.mobile-btn').on('click',  function() {
     $('.mobile-btn').toggleClass('show-mobile-btn');
     $('.menu').toggleClass('show-menu');
     $('.menu-item').toggleClass('show-menu-item')
 });

 $('.menu nav a').on('click',  function() {
     $('.mobile-btn').removeClass('show-mobile-btn');
     $('.menu').removeClass('show-menu');
     $('.menu-item').removeClass('show-menu-item')
 });
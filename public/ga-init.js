// Google Analytics initialization
(function() {
  var GA_MEASUREMENT_ID = 'G-7NRXBXD9SY'; // Replace with your actual ID

  // Load gtag.js
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  // Initialize
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  console.log('GA4 loaded via public script');
})();

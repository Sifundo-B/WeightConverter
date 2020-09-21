const input = document.getElementById('lbsInput');
const output = document.getElementById('output');

output.style.visibility = 'hidden';

input.addEventListener('input', (e) => {
  let lbs = e.target.value;

  output.style.visibility = 'visible';

  let grams = document.getElementById('gOutput');
  grams.innerHTML = lbs/0.0022046;

  let kiloGrams = document.getElementById('kgOutput');
  kiloGrams.innerHTML = lbs/2.2046;

  let ounces = document.getElementById('ozOutput');
  ounces.innerHTML = lbs*16;

  e.preventDefault();
}); 
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
;(function() {

  window.onload = function() {
    var primary = document.getElementById('primary-theme');
    var secondary = document.getElementById('secondary-theme');
    var stylesheet = document.getElementsByTagName('link')[0];

    primary.addEventListener('click', function() {
      stylesheet.href = 'css/style.css';
    });

    secondary.addEventListener('click', function() {
      stylesheet.href = 'css/alt.css';
    });
  };
}());
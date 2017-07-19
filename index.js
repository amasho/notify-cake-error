window.addEventListener('load', function() {
  var targets = document.querySelectorAll('.cake-error')
  if (!!targets) {
    Array.prototype.forEach.call(targets, function(v, i) {
      if (!!window.Notification) {
        Notification.requestPermission(function(result) {
          if (result === 'granted') {
            new Notification(v.innerHTML)
          } else {
            console.error(v.innerHTML)
          }
        })
      } else {
        console.error(v.innerHTML)
      }
    });
  }
});

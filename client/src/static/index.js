var styles = require('../app/main.css');
var datePicker = require('../app/datepicker.css');

var Elm = require('../app/Main.elm');
var mountNode = document.getElementById('app');
var app = Elm.Main.embed(mountNode, {
  buildVersion: BUILD_VERSION,
  buildTime: BUILD_TIME,
  buildTier: BUILD_TIER,
  apiHost: API_HOST,
});

app.ports.setItem.subscribe(function(item) {
  localStorage.setItem(item.key, item.value);
});

app.ports.getItem.subscribe(function(key) {
  const value = localStorage.getItem(key);

  app.ports.receiveItem.send({key, value});
});

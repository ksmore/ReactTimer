var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);

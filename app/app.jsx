var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

var TodoApp = require('TodoApp');

// Load bootstrap & styles
//require('style!css!bootstrap/dist/css/bootstrap.min.css');
//require('applicationStyles'); // for LESS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);


// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//       <Route path="about" component={About}/>
//       <Route path="examples" component={Examples}/>
//       <IndexRoute component={Weather}/>
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );

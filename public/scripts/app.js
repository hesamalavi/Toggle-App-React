'use strict';

// // console.log('app is running');

// const app = {
//   title: 'Visibility Toggle',
//   toggleOptions: ''
// };

// const hideDetails = () => {
//   app.toggleOptions = '';
//   render();
// };
// const showDetails = () => {
//   app.toggleOptions = 'There is a message here';
//   render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={!app.toggleOptions ? showDetails : hideDetails}>
//         {!app.toggleOptions ? 'Show Details' : 'Hide Details'}
//       </button>
//       <p>{app.toggleOptions}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey. These are some details you can now see!'
      )
    )
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();

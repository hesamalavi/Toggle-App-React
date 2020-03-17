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

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.showContent = this.showContent.bind(this);
    this.state = {
      visibility: false
    };
  }
  showContent() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.showContent}>
          {this.state.visibility ? 'Hide' : 'Show'}
        </button>
        {this.state.visibility && (
          <div>
            <p>hey</p>
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

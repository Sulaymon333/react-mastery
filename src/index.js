import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => {
//       console.log(position);
//     },
//     err => {
//       console.log(err);
//     }
//   );
//   return <div>Hello class components</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };

    // get latitude function is moved to the constructor to prevent double fetch when render() is called multiple times
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => {
        console.log(err);
      }
    );
  }
  render() {
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

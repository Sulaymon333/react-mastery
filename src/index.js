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
    // the only time we do direct assignment to our state is when we initialize it. otherwise never never
    this.state = { lat: null, errorMessage: '' };

    // get latitude function is moved to the constructor to prevent double fetch when render() is called multiple times
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // console.log(position);
        // use setState() to update the state
        this.setState({ lat: position.coords.latitude });
        // never do this
        // this.state.lat = position.coords.latitude;
      },
      err => {
        // console.log(err);
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }
  render() {
    // return (
    //   <div>
    //     Latitude: {this.state.lat} <br />
    //     Error message: {this.state.errorMessage}
    //   </div>

    // );
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error message: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Error message: {this.state.lat}</div>;
    }
    return <div>Loading ...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

import React, { Component } from 'react';
import './App.css';
import MainView from "./MainView";

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //     name: 'Vasia',
    //     counter: 0
    // };
  }

  // onClick = () => {
  //   const { name, counter } = this.state;
  //
  //   if(name === 'Vasia') {
  //       this.setState({
  //           name: 'Masia',
  //           counter: counter + 1
  //       });
  //   } else {
  //       this.setState({
  //           name: 'Vasia',
  //           counter: counter + 1
  //       });
  //   }
  // };

  render() {
    // const { name, counter } = this.state;

    return (
      <div className="App">
          <MainView />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import MainView from "./MainView";
import Modal from "./Modal";

class App extends Component {
  // constructor() {
  //   super();
  //
  //   // this.state = {
  //   //     name: 'Vasia',
  //   //     counter: 0
  //   // };
  // }

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
        <main className="content">
            <p>Lorem ipsum paragraph <Modal />...</p>
            <p>Lorem ipsum paragraph...</p>
            <p>Lorem ipsum paragraph...</p>
        </main>
    );
  }
}

export default App;

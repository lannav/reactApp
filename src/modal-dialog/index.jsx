import React, { Component } from 'react';
import './style.css';

// const modalStyle = {
//     'background-color': 'rgba(0,0,0,0.5)',
//     position: "fixed",
//     height: "100%",
//     width: "100%",
//     top: 0,
//     left: 0,
//     display: "flex",
//     'align-items': "center",
//     'justify-content': "center",
// };

class Index extends Component {
    render() {
        const { onClickHandler } = this.props;

        return(
            <div className="Modal">
                <input id="firstName" placeholder="You first name"/>
                <input id="lastName" placeholder="You last name"/>
                <input id="phone" placeholder="You phone number"/>
                <button onClick={onClickHandler}>Add person</button>
            </div>
            );
    }
}

export default Index;
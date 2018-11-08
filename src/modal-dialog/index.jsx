import React, { Component } from 'react';
import './style.css';


class Index extends Component {
    render() {
        const { onClickHandler } = this.props;

        return(
            <div className="modal">
                <div className="content">
                    <div className="inputs">
                        <input id="firstName" placeholder="You first name"/>
                        <input id="lastName" placeholder="You last name"/>
                        <input id="phone" placeholder="You answer"/>
                    </div>
                    <button id="btn-confirm" onClick={onClickHandler}>Confirm</button>
                </div>
            </div>
            );
    }
}

export default Index;
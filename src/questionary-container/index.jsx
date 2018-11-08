import React, { Component } from 'react';
import Area from "../modal-area";
import Dialog from "../modal-dialog";
import './style.css';


class Questionary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalActive: false,
            persons: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.setModal = this.setModal.bind(this);
    }

    handleClick() {
        const{ persons } = this.state;

        let fName = document.getElementById("firstName").value;
        let lName = document.getElementById("lastName").value;
        let phone = document.getElementById("phone").value;
        persons.push({"firstName": fName, "lastName": lName, "phone": phone});
        this.setState({
            isModalActive: false,
            persons: persons
        });
    }

    setModal() {
        const { persons } = this.state;

        this.setState({
            isModalActive: true,
            persons: persons
        });
    }

    render() {
        const{ persons, isModalActive } = this.state;

        let personsList = [];
        persons.forEach(person => personsList.push(<div className="Person"><p>{person.firstName} {person.lastName}: {person.phone}</p></div>));
        return(
            <div className="PersonList">
                {personsList}
                <button onClick={this.setModal}>New person</button>
                {isModalActive ? (
                    <Area>
                        <Dialog onClickHandler={this.handleClick}/>
                    </Area>
                    ) : null}
            </div>
        );
    }
}

export default Questionary;
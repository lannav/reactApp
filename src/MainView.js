import React, { Component } from 'react';
import './MainView.css';

class MainView extends Component {
    constructor(props) {
        super(props);

        //mock
        this.state = {
            persons: [
                {"firstName": "Vasia", "lastName": "Pupkin", "phone": "1111111111"},
                {"firstName": "Masia", "lastName": "Popkin", "phone": "2222222222"},
                {"firstName": "Kasia", "lastName": "Dupkin", "phone": "3333333333"},
                {"firstName": "Dasia", "lastName": "Kupkin", "phone": "4444444444"}
                ]
        };

        console.log("constructor");
    }

    render() {
        const { persons } = this.state;

        let rows = [];
        if (persons.length > 0)
            persons.forEach(person => rows.push(<tr><td>{`${person.firstName} ${person.lastName}, phone number: ${person.phone}`}</td></tr>));
        return (
            <div>
                <table>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
                <button onClick={this.createNewPerson}>+</button>
            </div>
        );
    }

    createNewPerson() {
        // alert(<button>hz</button>);
    }

    // componentWillReceiveProps(nextProps) {
    //     const { name: oldName } = this.props;
    //     const { name: newName } = nextProps;
    //
    //     console.log(`oldName: ${oldName}, newName: ${newName}`);
    // }
    //
    // componentDidMount() {
    //     console.log("DidMount");
    // }
    //
    // shouldComponentUpdate(nextProps) {
    //     // const { name: oldName } = this.props;
    //     const { counter } = nextProps;
    //
    //     return counter < 3;
    // }
    //
    // componentWillUnmount(){
    //     console.log("component is done");
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //     const { name: newName } = this.props;
    //     const { name: oldName } = prevProps;
    //
    //     console.log(`newName
    //         ${newName}
    //         oldName: ${oldName}`
    //     );
    // }
}

export default MainView;
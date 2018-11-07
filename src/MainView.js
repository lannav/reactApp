import React, { Component } from 'react';


class MainView extends Component {
    constructor(props) {
        super(props);

        console.log("constructor");
    }

    render() {
        const { ...persons } = this.props;

        let rows = null;
        if (persons && persons.length > 0)
            persons.forEach(person => rows += <tr>
                <td>
                    {person.firstName + " " + person.lastName + ": " + person.phone}
                </td>
            </tr>);
        return (
            <div>
                <table>
                    {rows}
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
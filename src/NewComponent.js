import React, { Component } from 'react';


class NewComponent extends Component {
    constructor(props) {
        super(props);

        console.log("constructor");
    }

    componentWillReceiveProps(nextProps) {
        const { name: oldName } = this.props;
        const { name: newName } = nextProps;

        console.log(`oldName: ${oldName}, newName: ${newName}`);
    }

    render() {
        const { name } = this.props;

        return (
            <div>
                Hello, {name}
            </div>
        );
    }

    componentDidMount() {
        console.log("DidMount");
    }

    shouldComponentUpdate(nextProps) {
        // const { name: oldName } = this.props;
        const { counter } = nextProps;

        return counter < 3;
    }

    componentWillUnmount(){
        console.log("component is done");
    }

    componentDidUpdate(prevProps, prevState) {
        const { name: newName } = this.props;
        const { name: oldName } = prevProps;

        console.log(`newName 
            ${newName}
            oldName: ${oldName}`
        );
    }
}

export default NewComponent;
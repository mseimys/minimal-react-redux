import * as React from "react";

// export const Hey = ({ name }) =>
//     <div>Hey {name}!</div>
export function Hey({ name }) {
    return <div>Hey {name}!</div>;
}

export class Hello extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };
    }
    handleClick() {
        this.setState({counter: this.state.counter + 1});
    }
    render() {
        return <h3>{this.props.name} counter:
        {this.state.counter} - <button onClick={() => this.handleClick()}>+1</button>
        </h3>;
    }
}

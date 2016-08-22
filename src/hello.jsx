import * as React from "react";

export class Hello extends React.PureComponent {
    render() {
        return <div>Hello {this.props.name}!</div>;
    }
}

export const Hey = (props) =>
    <div>Hey {props.name}!</div>

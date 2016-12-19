import * as React from "react";

export class Counter extends React.Component {
    constructor() {
        super();
        this.state = { counter: 10 };
    }
    handleClick(amount) {
        this.setState({ counter: this.state.counter + amount });
    }
    render() {
        return <div>
            <h3>
                Counter of { this.props.name }: { this.state.counter }
            </h3>
            <button onClick={ () => this.handleClick(1) }>+1</button>
            <button onClick={ () => this.handleClick(10) }>+10</button>
            <small>By clicking on these buttons you change internal state of React Component: changed state makes it to rerender itself</small>
        </div>;
    }
}

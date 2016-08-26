import * as React from "react";
import {connect} from "react-redux";
import {increment} from "../store";

class ByeComponent extends React.Component {
    render() {
        const {counter, onIncrementClick} = this.props;
        return <div>
            <h3>Bye x <b>{counter}</b>!</h3>
            <button onClick={() => onIncrementClick(1)}>Bye +1</button>
            <button onClick={() => onIncrementClick(10)}>Bye +10</button>
            <small>By clicking on these buttons you dispatch increment action, that changes app state (store) which is then mapped back to this connected component's props</small>
        </div>;
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
    onIncrementClick: (amount) => {
        dispatch(increment(amount))
    }
});

export const Bye = connect(
    mapStateToProps,
    mapDispatchToProps
)(ByeComponent);

import * as React from "react";
import { connect } from "react-redux";
import { increment } from "../store";

/* Dumb component, we can move it to `../components` if it gets too big */
class ByeComponent extends React.Component {
    render() {
        const { counter, onIncrementClick } = this.props;
        return <div>
            <h3>Bye x <b>{ counter }</b>!</h3>
            <button onClick={ () => onIncrementClick(-1) }>Bye -1</button>
            <button onClick={ () => onIncrementClick(1) }>Bye +1</button>
            <button onClick={ () => onIncrementClick(3) }>Bye +3</button>
            <small>By clicking on these buttons you dispatch increment action, 
            that changes app state (store) which is then mapped back to this connected component's props</small>
        </div>;
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
    onIncrementClick: (amount) => {
        dispatch(increment(amount));
    }
});

// component connected to application state and/or dispatch is _a container_
export const Bye = connect(
    mapStateToProps,
    mapDispatchToProps
)(ByeComponent);

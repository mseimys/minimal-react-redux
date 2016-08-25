import * as React from "react";
import {connect} from "react-redux";
import {increment} from "../store";

class Bye extends React.Component {
    render() {
        const {counter, onIncrementClick} = this.props;
        return <div>
            Bye x <b>{counter}</b>!
            <button onClick={() => onIncrementClick(1)}>Bye +1!</button>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bye);

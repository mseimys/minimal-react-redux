import * as React from "react";
import {connect} from "react-redux";
import {increment} from "../reducers";

class Bye extends React.PureComponent {
    render() {
        const {counter, onIncrementClick} = this.props;
        return <div>Bye x <b>{counter}</b>! <button onClick={() => onIncrementClick(1)}>Bye!</button></div>;
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: (amount) => {
            dispatch(increment(amount))
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bye);

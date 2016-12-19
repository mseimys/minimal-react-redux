import * as React from "react";
import { connect } from "react-redux";

/* Dumb presentational component, all it knows is that a `number` prop is being passed to it */
class ByeListComponent extends React.Component {
    renderByeBye(number) {
        var byebye = [];
        for (var i = 0; i < number; ++i) {
            byebye.push(<span key={ i }>Bye { i } </span>);
        }
        return byebye;
    }
    render() {
        return <div>
            { this.renderByeBye(this.props.number) }
        </div>;
    }
}

const mapStateToProps = (state) => ({
    number: state.counter
});

export const ByeList = connect(
    mapStateToProps
)(ByeListComponent);

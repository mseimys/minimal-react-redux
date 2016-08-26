import * as React from "react";
import {connect} from "react-redux";

class ByeListComponent extends React.Component {
    renderByeBye(number) {
        var byebye = [];
        for (var i = 0; i < number; ++i) {
            byebye.push(<span>Bye {i} </span>);
        }
        return byebye;
    }
    render() {
        return <div>
                {this.renderByeBye(this.props.number)}
            </div>;
    }
}

const mapStateToProps = (state) => ({
    number: state.counter
});

export const ByeList = connect(mapStateToProps)(ByeListComponent);

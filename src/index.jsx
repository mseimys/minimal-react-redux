import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Hey } from "./components/stateless";
import { Counter } from "./components/counter";
import { Bye } from "./containers/bye";
import { ByeList } from "./containers/byelist";
import store from "./store";

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <h2>COMPONENTS - Building blocks of React</h2>
            Pure/stateless React component: <Hey name="You" />
            React component with state: <Counter name="React" />

            <h2>CONTAINERS - Connected components</h2>
            This component is connected to Redux store: <Bye />
            This component is attached to the same STATE as Bye above, 
            but it has no idea of Bye component itself, it just renders a bunch of bye byes: <ByeList />
        </div>
    </Provider>,
    document.getElementById("app")
);

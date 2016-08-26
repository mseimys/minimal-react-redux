import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {Hello, Hey} from "./components/hello";
import {Bye} from "./containers/bye";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h2>COMPONENTS - Building blocks of React</h2>
            Pure React component: <Hey name="You" />
            React component with state: <Hello name="React" />
            <h2>CONTAINERS - Connected components</h2>
            This component is connected to Redux store: <Bye />
        </div>
    </Provider>,
    document.getElementById("app")
);

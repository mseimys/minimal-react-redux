import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {Hello, Hey} from "./components/hello";
import Bye from "./containers/bye";
import store from "./store";


ReactDOM.render(
    <Provider store={store}>
        <div>
            <h2>COMPONENTS</h2>
            <Hello name="React" />
            <Hey name="HOHO" />
            <hr/>
            <h2>CONTAINERS</h2>
            <Bye />
        </div>
    </Provider>,
    document.getElementById("app")
);

import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello, Hey} from "./hello";

ReactDOM.render(
    <div>
        <Hello name="React" />
        <Hey name="React" />
    </div>,
    document.getElementById("app")
)

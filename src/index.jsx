import * as React from "react"
import * as ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"

import {Hello, Hey} from "./components/hello"
import Bye from "./containers/bye"
import rootReducer from "./reducers"

let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h2>COMPONENTS</h2>
            <Hello name="React" />
            <Hey name="React" />

            <h2>CONTAINER</h2>
            <Bye />
        </div>
    </Provider>,
    document.getElementById("app")
)

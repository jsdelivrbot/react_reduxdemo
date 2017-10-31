import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/app";
import reducers from "./reducers";
import BookDetail from "./containers/book-detail";
import BookList from "./containers/book-list";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    {/*<App />*/}

    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/details" component={BookDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);

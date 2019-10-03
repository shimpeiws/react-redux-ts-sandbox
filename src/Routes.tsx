import * as React from "react";
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import Counter from "./counter/Container";
import FileUpload from "./fileUpload/Container";
import NotFound from "./NotFound";

export class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>react-redux-ts-sandbox</h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/file-upload">FileUpload</Link>
        </li>
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/file-upload" component={FileUpload} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

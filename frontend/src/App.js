import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home/Home";

import { NavBar } from "./components/NavBar";
import UserLoginContainer from "./containers/UserLoginContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/Auth"} component={UserLoginContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

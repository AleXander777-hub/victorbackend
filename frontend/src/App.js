import { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home/Home";

import NavBar from "./components/NavBar";
import CreatePostContainer from "./containers/CreatePostContainer";
import PostsContainer from "./containers/PostsContainer";
import UpdatePostContainer from "./containers/UpdatePostContainer";
import UserLoginContainer from "./containers/UserLoginContainer";

class App extends Component {
  render() {
    const checkUser = localStorage.length;
    console.log(checkUser, "APP");
    if (checkUser == 0) {
      return (
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/Auth"} component={UserLoginContainer} />
          </Switch>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/Posts"} component={PostsContainer} />
            <Route path={"/create"} component={CreatePostContainer} />
            <Route path={"/update/:id"} component={UpdatePostContainer} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}
const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};
export default connect(mapStateToProps)(App);

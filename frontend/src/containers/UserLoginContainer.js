import React, { Component } from "react";
import { connect } from "react-redux";
import { UserLogin } from "../components/Login/UserLogin";

import { LoginUser } from "../redux/actions/userActions";

class UserLoginContainer extends Component {
  render() {
    console.log(this.props, "Пропсы в юзере");

    return (
      <div className="container">
        <UserLogin
          user={this.props.user}
          LoginUser={this.props.UserLoginAction}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    UserLoginAction: (username, password) =>
      dispatch(LoginUser(username, password)),
  };
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginContainer);

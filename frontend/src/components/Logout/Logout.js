import React, { Component, Fragment } from "react";

class UserLogout extends Component {
  render() {
    const Logout = () => {
      console.log("Выхожу");
      localStorage.removeItem("acess_token");
      localStorage.removeItem("user_data");

      window.location.href = "/";
    };

    return (
      <Fragment>
        <button className="btn btn-primary" onClick={Logout}>
          Выйти из Юзера
        </button>
      </Fragment>
    );
  }
}

export default UserLogout;

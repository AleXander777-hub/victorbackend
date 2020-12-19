import React, { Fragment } from "react";
import { UserFormError } from "./UserFormError";

export class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formErrors: {
        email: "",
        password: "",
      },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };

    this.change = this.change.bind(this);

    this.login = this.login.bind(this);
  }

  change(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 5;
        fieldValidationErrors.password = passwordValid
          ? ""
          : " должен быть равен или больше 5 символов";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }
  errorClass(error) {
    return error.length === 0 ? "" : ":invalid";
  }

  async login(e) {
    e.preventDefault();
    const username = this.state.username;

    const password = this.state.password;

    console.log(username, password, "AAAAA");

    try {
      await this.props.LoginUser(username, password);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
    }
  }

  render() {
    const username = this.state.username;
    const password = this.state.password;
    console.log("username", username, "password", password);
    if (this.props.user.success_login === false) {
      return (
        <div className="updateInput mt-4">
          <form onSubmit={(e) => this.login(e)}>
            <div class="mb-3">
              <label class="form-label">Имя</label>
              <input
                type="text"
                class="form-control"
                name="username"
                onChange={(e) => this.change(e)}
                value={this.state.username}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                name="password"
                onChange={(e) => this.change(e)}
                value={this.state.password}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return <div className="empty"></div>;
    }
  }
}

import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "SuperMax"
  };

  userNameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <h1>your name is {}</h1>

        <UserInput
          changed={this.userNameChangeHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}
export default App;

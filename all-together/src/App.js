import React from "react";
import "./App.css";

function Card(props) {
  return (
    <div>
      <p>
        {props.user.firstName} {props.user.lastName}
      </p>
    </div>
  );
}

function addUser() {
  return "Test Added!";
}

function AddUserForm() {
  return "Nothing here yet";
}

class App extends React.Component {
  state = {
    users: [
      {
        firstName: "Dwaine",
        lastName: "Best",
        username: "dwainetrain",
        gamesPlayed: 0
      },
      {
        firstName: "Margie",
        lastName: "Oslie",
        username: "polaris",
        gamesPlayed: 0
      }
    ]
  };

  addUserTest = () =>
    this.setState({
      firstName: "YOu added something"
    });

  // send function to component, let it return the state to the parent

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gamers and the Games They've Played</h1>
          <div>
            <form>
              <input type="text" placeholder="First Name" />
              <button onClick={() => this.addUserTest}>Add User</button>
            </form>
          </div>
          {this.state.users.map(user => (
            <li>
              <Card user={user} />
            </li>
          ))}
        </header>
      </div>
    );
  }
}

export default App;

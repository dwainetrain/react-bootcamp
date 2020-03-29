import React, { Component } from "react";
import ListContacts from "./ListsContacts";

class App extends Component {
  state = {
    contacts: [
      {
        id: "ryan",
        name: "Ryan Florence",
        email: "ryan@reacttraining.com",
        avatarURL: "http://localhost:5001/ryan.jpg"
      },
      {
        id: "michael",
        name: "Michael Jackson",
        email: "michael@reacttraining.com",
        avatarURL: "http://localhost:5001/michael.jpg"
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        email: "tyler@reacttraining.com",
        avatarURL: "http://localhost:5001/tyler.jpg"
      }
    ]
  };

  // Dwaine - the reason the second function works and first doesn't is because you are returning an object!
  // You're getting confused by the many uses of curly braces, making js confusing af. if there aren't parantheses around
  // the curly braces, js thinks you're creating an expression, not an object...
  // removeContact = contact => {
  //   this.setState(currentState => {
  //     contacts: currentState.contacts.filter(c => c.id !== contact.id);
  //   });
  // };

  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(c => c.id !== contact.id)
    }));
  };

  render() {
    return (
      <ListContacts
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact}
      />
    );
  }
}

export default App;

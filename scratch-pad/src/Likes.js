import React from "react";

class Likes extends React.Component {
  render() {
    console.log(this.props.users[1]);
    return (
      <ul>
        {this.props.userIds.map(userProfile => (
          <li>{this.props.users[userProfile.id].name}</li>
        ))}
      </ul>
    );
  }
}

export default Likes;

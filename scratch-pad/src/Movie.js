import React from "react";
import Likes from "./Likes";

class Movie extends React.Component {
  render() {
    this.movieId = this.props.movieId;
    this.movieName = this.props.movies[this.props.movieId].name;
    this.likesList = this.props.profiles.filter(
      profile => +profile.favoriteMovieID === this.movieId
    );
    console.log("Likes List: ", this.likesList);
    return (
      <li>
        <h2 key={this.movieId}>{this.movieName}</h2>
        <p>Liked by:</p>
        <Likes userIds={this.likesList} users={this.props.users} />
      </li>
    );
  }
}

export default Movie;

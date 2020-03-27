import React, { Component, Profiler } from "react";

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Jones",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 3,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth"
  },
  2: {
    id: 2,
    name: "Selma"
  },
  3: {
    id: 3,
    name: "Million Dollar Baby"
  },
  4: {
    id: 4,
    name: "Forrest Gump"
  },
  5: {
    id: 5,
    name: "Get Out"
  }
};

class Movie extends React.Component {
  render() {
    this.movieId = this.props.movieId;
    this.movieName = movies[this.movieId].name;
    this.likesList = profiles.filter(
      profile => +profile.favoriteMovieID === this.movieId
    );
    return (
      <li>
        <h2>{this.movieName}</h2>
        <p>Liked by:</p>
        {this.likesList.length > 0 ? (
          <Likes userIds={this.likesList} />
        ) : (
          "This movie is not a user favorite"
        )}
      </li>
    );
  }
}

// You could probably move the the null checking into this component...
class Likes extends React.Component {
  render() {
    return (
      <ul>
        {this.props.userIds.map(userProfile => (
          <li key={userProfile.id}>{users[userProfile.id].name}</li>
        ))}
      </ul>
    );
  }
}

class FavMovies extends Component {
  render() {
    return (
      <div>
        <h2>How Popular is Your Favorite Movie?</h2>
        <ul>
          {Object.keys(movies).map(movie => (
            <Movie key={movies[movie].id} movieId={movies[movie].id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default FavMovies;

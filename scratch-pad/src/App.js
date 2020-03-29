import React from "react";
import FavMovies from "./FavMovies";
import ManageStateEx from "./ManageStateEx";
import MirrorTyping from "./MirrorTyping";
import ShoppingList from "./ShoppingList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ShoppingList />
      <MirrorTyping />
      <ManageStateEx />
    </div>
  );
}

export default App;

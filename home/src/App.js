import React, { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";

const App = () => {
  const [userQuery, setUserQuery] = useState("");

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
    setUserQuery("");
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      searchQuery();
      setUserQuery("");
    }
  };

  return (
    <div className="App">
      <h1>hello brad!</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={e => setUserQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <Stories />
    </div>
  );
};

export default App;

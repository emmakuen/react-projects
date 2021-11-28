import React, { useEffect, useState } from "react";
import dynamicSort from "./utils/dynamicSort";
import "./styles/App.css";
import JokeList from "./components/JokeList";
import SideBar from "./components/SideBar";
import Spinner from "./components/Spinner";
import dadJokes from "./apis/dadjokes";

function App() {
  const [jokes, setJokes] = useState([]);
  const jokeNum = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let newJokes = [];
    while (newJokes.length < jokeNum) {
      const res = await dadJokes.get();
      const newJoke = {
        id: res.data.id,
        text: res.data.joke,
        score: 0,
      };

      let idx = jokes.findIndex((Joke) => Joke.id === newJoke.id);
      if (idx === -1) {
        newJokes.push(newJoke);
      }
    }
    setJokes([...jokes, ...newJokes]);
    console.log(jokes);
  };

  const addScore = (id) => {
    let jokesCopy = jokes;
    let idx = jokesCopy.findIndex((joke) => joke.id === id);
    jokesCopy[idx].score = jokesCopy[idx].score + 1;
    jokesCopy.sort(dynamicSort("score"));
    setJokes([...jokesCopy]);
  };

  const subtractScore = (id) => {
    let jokesCopy = jokes;
    let idx = jokesCopy.findIndex((joke) => joke.id === id);
    jokesCopy[idx].score = jokesCopy[idx].score - 1;
    jokesCopy.sort(dynamicSort("score"));
    setJokes([...jokesCopy]);
  };

  let appBorderStyle = jokes.length === 0 ? { border: "none" } : {};

  return (
    <div className="App" style={appBorderStyle}>
      {jokes.length === 0 && <Spinner />}
      {jokes.length > 0 && (
        <>
          <SideBar fetchJokes={fetchData} />
          <JokeList
            jokes={jokes}
            addScore={addScore}
            subtractScore={subtractScore}
          />
        </>
      )}
    </div>
  );
}

export default App;

npx create-react-app football-players
cd football-players
// src/players.js
const players = [
    {
      name: "Cristiano Ronaldo",
      team: "Manchester United",
      nationality: "Portuguese",
      jerseyNumber: 7,
      age: 37,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Lionel Messi",
      team: "Paris Saint-Germain",
      nationality: "Argentinian",
      jerseyNumber: 30,
      age: 34,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Neymar Jr",
      team: "Paris Saint-Germain",
      nationality: "Brazilian",
      jerseyNumber: 10,
      age: 30,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Kylian Mbappe",
      team: "Paris Saint-Germain",
      nationality: "French",
      jerseyNumber: 7,
      age: 23,
      imageUrl: "https://via.placeholder.com/150"
    }
  ];
  
  export default players;
  // src/Player.js
import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", textAlign: "center" }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
// src/PlayersList.js
import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
// src/App.js
import React from "react";
import PlayersList from "./PlayersList";

const App = () => {
  return (
    <div>
      <h1>Football Players</h1>
      <PlayersList />
    </div>
  );
};

export default App;
npm install react-bootstrap bootstrap
import { Card } from "react-bootstrap";

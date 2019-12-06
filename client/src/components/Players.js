import React from 'react';
import axios from 'axios';

import { PlayerCard } from './PlayerCard';

class Players extends React.Component {
  state = { player: null };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(response => {
      console.log(response.data);
      this.setState({ player: response.data });
    })
    .catch(error => {
      console.log("No player data returned", error)
    })
  }

  render() {
    const { player } = this.state;

    if (user === null) {
      return <div>Loading...</div>
    }

    return (
      <PlayerCard player={player} />
    );
  }
}

export default Players;
import React from 'react';

export const PlayerCard = (props) => {
  const { name, country, searches } = props.player;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Searches: {searches}</p>
    </div>
  );
}
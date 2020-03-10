import React, { Component } from 'react';
import { useSelector } from 'react-redux';

export default function Dogs() {
  const { user, dogs } = useSelector(state => state);
  console.log('user ====>', user);
  console.log('dogs ====>', dogs);

  const renderDogs = () => {
    return !dogs.length ? null : dogs.map(d => <DogCard key={d.id} dog={d} />);
  };
  return (
    <div className="dog-container">
      <h1 style={{ width: '100%' }}>Dogs</h1>
      {renderDogs()}
    </div>
  );
}

function DogCard({ dog }) {
  return (
    <div className="dog-card">
      <img src={dog.img} alt={dog.name} />
      <h3>{dog.name}</h3>
      <h3>{dog.mood}</h3>
    </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import './MemeCreator.css';

const MemeCreator = () => {
  const imageUrl = useSelector(state => state.picture.pictureUrl);

  return (
    <div>
      <h1>
      {imageUrl}
      </h1>
      This is the MemeCreator
    </div>
  );
};

export default MemeCreator;
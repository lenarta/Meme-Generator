import React, { useState, useEffect } from 'react';
import './MemeCreatorGalery.css';

function MemeCreatorGalery(state) {
  const [memePictures, setMemePictures] = useState([]);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getLeaderList = async () => {
      try {
        const response = await fetch(
          `https://api.imgflip.com/get_memes`,
          {
            method: 'GET',
          }
        );

        const responseBody = await response.json();

        if (response.status !== 200) {
          throw Error(responseBody);
        }
        setIsLoaded(true);
        setMemePictures(responseBody.data.memes);
        console.log(responseBody);
      } catch (error) {
        console.log(error);
        setIsErrorOccured(true);
      }
    };
    getLeaderList();
  }, [isLoaded]);

  function renderGalery() {
    return (
      <div className='galery-container'>
        {memePictures.map((meme) => {
          return (
            <img className='galery-img' src={meme.url} alt={meme.name} key={meme.id} onClick={state.setSelectedMemePictureUrl(meme.url)}></img>
          );
        })}
      </div>
    );
  };

  return isErrorOccured ? (
    <div>Error</div>
  ) : isLoaded ? (
    renderGalery()
  ) : (
    <div>Loading...</div>
  )
}

export default MemeCreatorGalery;

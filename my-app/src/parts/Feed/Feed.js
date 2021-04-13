import React, { useState, useEffect } from 'react';
import {
  ErrorComponent,
  LoadingComponent,
} from '../ProcessMessages/ProcessMessages';
import './Feed.css';

export const Feed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const accessToken = window.localStorage.getItem('AccessToken');
  const [memes, setMemes] = useState([]);
  //console.log(accessToken);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(`https://api.imgflip.com/get_memes`);
        const responseBody = await response.json();

        if (response.status !== 200) {
          throw Error(responseBody);
        }
        setMemes(responseBody.data.memes);

        setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsErrorOccured(true);
      }
    };
    getImages();
  }, [accessToken]);

  const renderMemes = () => {
    return (
      <div className="content">
        {memes.map((meme) => {
          return (
            <div className="meme" key={meme.id}>
              <img src={meme.url} alt={meme.name}></img>
            </div>
          );
        })}
      </div>
    );
  };

  return isErrorOccured ? (
    <ErrorComponent />
  ) : isLoaded ? (
    renderMemes()
  ) : (
    <LoadingComponent />
  );
};

export default Feed;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  ErrorComponent,
  LoadingComponent,
} from '../ProcessMessages/ProcessMessages';
import { loadPictureUrl } from '../../actions/memeMakerActions';
import './MemeCreatorGalery.css';

function MemeCreatorGalery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  //const accessToken = window.localStorage.getItem('AccessToken');
  const [memes, setMemes] = useState([]);

  const dispatch = useDispatch();

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
  }, [isLoaded]);

  const handleClick = (memeUrl) => {
    dispatch(loadPictureUrl(memeUrl));
    console.log(memeUrl);
  };

  const renderMemes = () => {
    return (
      <div className="mainpanel">
        <div className="memecontainer">
          <div className="memes">
            {memes.map((meme) => {
              return (
                <div className="meme" key={meme.id}>
                  <img src={meme.url} alt={meme.name} onClick={() => {handleClick(meme.url);}}></img>
                </div>
              );
            })}
          </div>
        </div>
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
}

export default MemeCreatorGalery;

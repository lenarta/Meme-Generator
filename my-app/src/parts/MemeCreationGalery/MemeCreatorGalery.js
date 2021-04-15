import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ErrorComponent,
  LoadingComponent,
} from '../ProcessMessages/ProcessMessages';
import { addPictureUrl } from '../../actions/memeCreatorActions';
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
    dispatch(addPictureUrl(memeUrl));
  };

  const renderMemes = () => {
    return (
      <div className="meme-creator-galery-mainpanel">
        <div className="meme-creator-galery-memecontainer">
          <div className="meme-creator-galery-memes">
            {memes.map((meme) => {
              return (
                <div className="meme-creator-galery-postcontainer" key={meme.id}>
                  <Link to="/memecreator">
                    <img
                      className="meme-creator-galery-meme"
                      key={meme.id}
                      src={meme.url}
                      onClick={() => {handleClick(meme.url);}}
                      alt={meme.name}>
                    </img>
                  </Link>
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

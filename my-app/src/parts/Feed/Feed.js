import React, { useState, useEffect } from 'react';
import {
  ErrorComponent,
  LoadingComponent,
} from '../ProcessMessages/ProcessMessages';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loadMemesAction, updateMemeAction } from '../../actions/memeActions';
import './Feed.css';

export const Feed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const accessToken = new Cookies().get('accessToken');
  const memes = useSelector((state) => state.feed.memes);
  const dispatch = useDispatch();

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(`https://api.imgflip.com/get_memes`);
        const responseBody = await response.json();

        if (response.status !== 200) {
          throw Error(responseBody);
        }
        dispatch(loadMemesAction(responseBody.data.memes));
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsErrorOccured(true);
      }
    };
    getImages();
  });

  const updateScore = async (onClick) => {
    onClick.preventDefault();
    console.log(JSON.stringify([onClick.target.innerText]));

    const res = await fetch(`http://81.0.84.195:8080/${onClick.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ tag: [onClick.target.innerText] }),
    });
    const data = await res.json();
    dispatch(updateMemeAction(data));
    console.log(JSON.stringify({ type: onClick.target.innerText }));
    console.log(onClick.target.id);
  };

  const renderMemes = () => {
    return (
      <div className="mainpanel">
        <div className="memecontainer">
          <div className="memes">
            {memes.map((meme) => {
              return (
                <div className="postcontainer" key={meme.id}>
                  <div
                    className="meme"
                    key={meme.id}
                    style={{ backgroundImage: `url(${meme.url})` }}
                  ></div>
                  <div className="tags">
                    <button id={meme.id} onClick={updateScore}>
                      funny
                    </button>
                    <button id={meme.id}>tag</button>
                    <button>tag</button>
                    <button>tag</button>
                    <button>tag</button>
                    <button>tag</button>
                  </div>
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
};

export default Feed;

import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import './MemeCreator.css';

const MemeCreator = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  
  const imageUrl = useSelector(state => state.picture.pictureUrl);

  const handleClick = (e) => {
    e.preventDefault();

    console.log('MUHAHAHAHAAA');
  }

  return (
    <div className='meme-creator-container'>
      <div className='meme-creator-header'>
        <img className='meme-creator-header-img'
          src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
          alt='Problem?'
        />
        <p className='meme-creator-header-text'>Meme Generator</p>
      </div>
      <div className='meme-creator-body'>
      <form className="meme-creator-form">
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={topText}
          onChange={e => setTopText(e.target.value)}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={e => setBottomText(e.target.value)}
        />
        <button onClick={handleClick}>Download</button>
      </form>
      <div className='meme-creator-preview-container'>
        <p className='meme-creator-preview-text-top'>{topText}</p>
        <img src={imageUrl} alt='X' className='meme-creator-preview-img'/>
        <p className='meme-creator-preview-text-bottom'>{bottomText}</p>
      </div>
      </div>
    </div>
  );
};

export default MemeCreator;
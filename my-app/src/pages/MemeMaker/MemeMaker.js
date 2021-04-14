import React, { useState } from 'react';
//import { Route, Switch } from 'react-router';
import MemeCreatorGalery from '../../parts/MemeCreationGalery/MemeCreatorGalery';
import MemeCreator from '../../parts/MemeCreator/MemeCreator';
import './MemeMaker.css';

function MemeMaker() {
  const [selectedMemePictureUrl, setSelectedMemePictureUrl] = useState('');
  const [isMemeGalery, setIsMemeGalery] = useState(true);

  return isMemeGalery ? (
    //<Switch>
    //  <Route path="/memegalery">
    //    <MemeCreatorGalery state={{ selectedMemePictureUrl: [selectedMemePictureUrl, setSelectedMemePictureUrl] }}/>
    //  </Route>
    //  <Route path="/memecreator">
    //    <MemeCreator />
    //  </Route>
    //</Switch>

    <MemeCreatorGalery />
  ) : (
    <MemeCreator />
  );
};

export default MemeMaker;
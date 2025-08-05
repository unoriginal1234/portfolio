import { useState } from 'react';

import SceneCard from "./SceneCard";
import { redHoneyData } from "../../content/redHoneyContent/redHoneyJson";
import Key from "./Key"
import LoginPage from "./LoginPage";



export default function RewritePage() {

  const [ hasLoggedIn, setHasLoggedIn ] = useState(false);


  function hasSuccessfullyLoggedIn(login) {

    if (login) {
      setHasLoggedIn(true);
      return true;
    }

  }

  return (
    <div className="container">
      {
        hasLoggedIn ? 
        (<><h1 className="title has-text-centered">Red Honey</h1>
          <Key />
          <div className="columns is-multiline is-centered">
            {
              redHoneyData.map((scene) => (
                <div key={scene.title} className="column is-3">
                  <SceneCard scene={scene} />
                </div>
              ))
            }
          </div></>)
        : <LoginPage onLogin={hasSuccessfullyLoggedIn} />
      }
      
    </div>
  );
}
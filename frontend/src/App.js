import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch} from 'react-router-dom'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Spots } from "./components/Spots";
// import { SingleSpotInformation } from "./components/SingleSpotInformation";
import { SpotReviews } from "./components/SpotReviews";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch></Switch>}
      <Switch>
        <Route exact path='/'>
          <Spots />
        </Route>
        <Route path='/spots/:spotId'>
          <SpotReviews />
        </Route>

      </Switch>
    </>
  );
}

export default App;

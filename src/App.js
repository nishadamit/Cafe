import React from 'react';

import LandingPage from './pages/LandingPage';


import { BrowserRouter as Router ,Link,Route,Switch } from 'react-router-dom';

const App = () =>{
       
  return(
    <Router>
          <Switch>
                <Route exact path="/" component={LandingPage} />
          </Switch>
      </Router>
)
}

export default App;
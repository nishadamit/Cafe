import React from 'react';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import UserDashBoard from './pages/UserDashboard';
import { BrowserRouter as Router ,Link,Route,Switch } from 'react-router-dom';

const App = () =>{
       
  return(
    <Router>
          <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/userdashboard" component={UserDashBoard} />
          </Switch>
    </Router>
)
}

export default App;
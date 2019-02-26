import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './component/contacts/Contacts';
import Header from './component/layout/Header';
import AddContact from './component/contacts/AddContact';
import About from './component/pages/about';
import NotFound from './component/pages/NotFound';
import Test from './component/test/Test';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

// import 'materialize-css/dist/css/materialize.css';
// import 'materialize-css/dist/js/materialize.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header branding='Contact Manager' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route exact path='/about' component={About} />
                <Route exact path='/test' component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/layout/auth/Login';
import Register from './components/layout/auth/Register';
import Alert from './components/layout/Alert';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
function App() {
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
     <Navbar />
     <Route exact path="/" component={Landing}/>
     <section className='container'>
       <Alert />
       <Switch>
       <Route exact path="/register" component={Register}/>
       <Route exact path="/login" component={Login}/>
       </Switch>
     </section>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;

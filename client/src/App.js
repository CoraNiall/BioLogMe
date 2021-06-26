import './App.css';
import RegistrationForm from './components/registrationForm';
import LoginForm from './components/loginForm';
import UserDashboard from './components/userDashboard';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="Main-wrapper">
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
          <LoginForm />
          </Route>
          <Route path='/register'>
        <RegistrationForm />
        </Route>
        <Route path='/dashboard'>
        <UserDashboard />
        </Route>
        <Route path='/'>
          <header className="Main-wrapper-header">
        <h2>Welcome to BioLog Me </h2>
        <Button 
        variant='contained' 
        color='primary' 
        component={Link} 
        to='/login'>Log In</Button>
        <Button 
        variant='contained' 
        color='primary' 
        component={Link} 
        to='/register'>Register</Button>
        </header>
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

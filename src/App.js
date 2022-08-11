import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// import routes from './routes';
import Login from './pages/Login';
import LoginSuccess from './pages/LoginSuccess';

// import { History } from 'history';

function App() {
  const useLogin = localStorage.getItem('coinMapLogin');
  return (
    <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            {useLogin && <Route path="/loginSuccess" component={LoginSuccess}  /> } 
            {/* <Route path="/loginSuccess" component={LoginSuccess}  /> */}
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

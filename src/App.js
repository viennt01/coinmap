// import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import LoginSuccess from './pages/LoginSuccess';

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect( ()=> {
  //   if(localStorage.getItem('coinMapLogin')){
  //     setIsLogin(true);
  //   }
  //   // eslint-disable-next-line
  // },[localStorage.getItem('coinMapLogin')])
  return (
    <div className="App-container">
      <div className='App'>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Login} />
              {/* {isLogin && <Route path="/loginSuccess" component={LoginSuccess}  /> }  */}
              <Route path="/loginSuccess" component={LoginSuccess}  />
            </Switch>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
// import routes from './routes';
import Login from './pages/Login';
import LoginSuccess from './pages/LoginSuccess';

function App() {
  return (
    <div className='App'>
        
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/loginSuccess" element={<LoginSuccess />} />
                </Routes>
    </div>
  );
}

export default App;

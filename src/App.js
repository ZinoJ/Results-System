import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
 
  return (
    <div className="app">
     <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/' element={<HomePage />}/>

     </Routes>
    </div>
  );
}

export default App;

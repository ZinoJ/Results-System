import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResultsPage from './pages/ResultsPage';

function App() {
 
  return (
    <div className="app">
     <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/' element={<HomePage />}/>
      <Route path='/results' element={<ResultsPage />}/>
      

     </Routes>
    </div>
  );
}

export default App;

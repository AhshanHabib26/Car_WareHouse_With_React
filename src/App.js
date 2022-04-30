import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componnents/Pages/Home/Home';
import Header from './Componnents/Pages/Header/Header';
import Blog from './Componnents/Pages/Blog/Blog';
import Signup from './Componnents/Pages/Register/Signup/Signup';
import Login from './Componnents/Pages/Register/Login/Login';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

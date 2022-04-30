import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componnents/Pages/Home/Home';
import Header from './Componnents/Pages/Header/Header';
import Blog from './Componnents/Pages/Blog/Blog';
import Signup from './Componnents/Pages/Register/Signup/Signup';
import Login from './Componnents/Pages/Register/Login/Login';
import AllInventoryItems from './Componnents/Pages/AllInventoryItem/AllInventoryItems/AllInventoryItems';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/all_car_list' element={<AllInventoryItems/>} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

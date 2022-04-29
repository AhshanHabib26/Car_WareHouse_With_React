import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componnents/Pages/Home/Home';
import Header from './Componnents/Pages/Header/Header';
import Blog from './Componnents/Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;

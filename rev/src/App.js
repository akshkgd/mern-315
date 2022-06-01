
import './App.css';
import {Route, Router, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
function App() {
  return (
    <div className="">
       <Navigation />
      
      <Routes>

        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    
 
      
    </div>
  );
}

export default App;

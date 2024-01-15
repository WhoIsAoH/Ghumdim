
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Category from './Pages/Category'
import LoginSignup from './Pages/LoginSignup'
import Favourites from './Pages/Favourites'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>

      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>

        <Route path='/favourite' element={<Favourites/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>

      
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;

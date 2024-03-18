import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Category from './Pages/Category'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import Destination from './Pages/Destination';
import Favourites from './Pages/Favourites';
import AddDes from './Pages/AddDes';

function App() {
  return (
    <div>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='adddestination' element={<Home category="button" />} /> */}
          <Route path='/religious' element={<Category category="religious" />} />
          <Route path='/parks' element={<Category category="parks" />} />
          <Route path='/hike' element={<Category category="hike" />} />
          <Route path='/add-destination' element={<AddDes />} />

          <Route path="/destination" element={<Destination />}>
            <Route path=':destinationId/' element={<Destination />} />
          </Route>


          <Route path='/favourites' element={<Favourites />} />
          <Route path='/login' element={<LoginSignup />} />

        </Routes>

      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;

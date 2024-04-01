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
import Admin from './Components/Admin/Admin';
import AdminDestinationDisplay from './Components/AdminDestinationDisplay/AdminDestinationDisplay';
import UserProfile from './Components/UserProfile/UserProfile';
import NearPlacesAll from './Components/NearPlacesAll/NearPlacesAll';
import ClientNavbar from './Components/ClientNavbar/ClientNavbar';
import { useState, useEffect } from 'react';
import SearchDestination from './Components/SearchDestinations/SearchDestination';
// import { useJwt } from "react-jwt";
import { jwtDecode } from "jwt-decode";

function App() {

  //jwtextract
  const [decodedToken, setDecodedToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        console.log(decoded, decodedToken);
      } catch (error) {
        console.error('Error decoding token:', error);
        // Handle error if unable to decode token
      }
    } else {
      // Handle case where token is null or empty
    }
  }, []);

  return (
    <div>

      <BrowserRouter>
        {decodedToken && decodedToken?.roles === 'CLIENT' ? <ClientNavbar /> : <Navbar />}
        {/* <Navbar /> */}

        <Routes>
          {/* <Route path='/' element={decodedToken && decodedToken.roles === 'ADMIN' ? <Admin /> : <Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/religious' element={<Category category="religious" />} />
          <Route path='/parks' element={<Category category="parks" />} />
          <Route path='/hike' element={<Category category="hike" />} />
          <Route path='/add-destination' element={<AddDes />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admindestinationdisplay/:destinationId' element={<AdminDestinationDisplay />} />
          <Route path='/userprofile/:userId' element={<UserProfile />} />
          {/* <Route path='/clientnavbar/:userId' element={<ClientNavbar />} /> */}

          <Route path="/destination" element={<Destination />}>
            <Route path=':destinationId' element={<Destination />} />
          </Route>

          <Route path='/favourites' element={<Favourites />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='nearbyplaces' element={<NearPlacesAll />} />
          <Route path={`/search/:query`} element={<SearchDestination />} />

        </Routes>

      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;

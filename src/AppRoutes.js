import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

// Context
import { UserContext } from './context/UserContext';

const AppRoutes = () => {
  const userDetails = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        {/* {
          userDetails.getSignInStatus() ? (<Route path='/home' element={<Home />} />) : (redirect('/sigin'))
        } */}
        <Route path='/home' element={ userDetails.getSignInStatus() ? <Home /> : <Navigate to="/signin" /> } />

        {/* <Route path='/home' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;

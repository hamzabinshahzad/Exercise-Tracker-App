// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

// Provider
import { UserActivitesProvider } from './context/UserActivitesContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <UserActivitesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserActivitesProvider>
    </UserProvider>
  );
}

export default App;

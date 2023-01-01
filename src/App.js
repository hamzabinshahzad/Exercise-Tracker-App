// import './App.css';
// import { useContext } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   redirect
// } from 'react-router-dom';

// import Landing from './components/Landing';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import Home from './components/Home';
import AppRoutes from './AppRoutes';

// Provider
import { UserActivitesProvider } from './context/UserActivitesContext';
import { UserProvider } from './context/UserContext';

// // Context
// import { UserContext } from './context/UserContext';


function App() {
  return (
    <UserProvider>
      <UserActivitesProvider>
        <AppRoutes />
      </UserActivitesProvider>
    </UserProvider>
  );
}

export default App;

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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Landing /> } />
          <Route path='/signin' element={ <SignIn /> }/>
          <Route path='/signup' element={ <SignUp /> }/>
          <Route path='/home' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </>  
  );
}

export default App;

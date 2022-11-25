import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import { Container } from '@mui/system';

import Targets from './components/auth/targets/Targets';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/auth/navBar/NavBar';
import { loadUser } from './store/actions/authActions';
import './styles.css';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  },[dispatch])

  return (
    <>
        <BrowserRouter>
        <Container maxWidth = 'md'>
            <NavBar/>
            <Container className='contentStyle'>
              <Routes>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/" element={<Targets/>}/>
              </Routes>
            </Container>
          </Container>
        </BrowserRouter>
    </>
  );
}

export default App;

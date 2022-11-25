import React from 'react';
import '../../../styles.css';
import {AppBar, Typography, Toolbar, Button} from '@mui/material';
 
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';



const NavBar = () => {
    let navigate = useNavigate()
    const state = useSelector(state => state)
    const auth = useSelector(state => state.auth)
    console.log(state)
    const dispatch = useDispatch()
    const handleSignOut = () => {
        dispatch(signOut())
        navigate('/signin')
  
    }

    return ( 
        <AppBar position='static'>
            <Toolbar>
            <Typography variant='h4' underline="none">
                <Link to='/' underline="none">
                    Travel planner
                </Link>
            </Typography>
            { auth._id ? (
                <>
                    <Typography variant='subtitle2' className='NavBar-login'>
                        Logged in as {auth.name}
                    </Typography>
                    <Button onClick={() => handleSignOut()} color="inherit" className='Button-logout'>
                        SignOut
                    </Button>
                </>
                ) : (
                <>
                    <Button  className='Button-sign'>
                        <Link to='/signin' underline="none">
                            SignIn
                        </Link>
                    </Button>
                        
                    <Button  className='Button-sign'>
                        <Link to='/signup'>
                            SignUp
                        </Link>
                    </Button> 
                </>
                    )}
            </Toolbar>
        </AppBar>
        
     );
}
 
export default NavBar;
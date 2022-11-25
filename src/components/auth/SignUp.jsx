import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Typography, TextField, Button } from "@mui/material";
import { signUp } from "../../store/actions/authActions";



const SignUp = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
      dispatch(signUp(user))
      setUser({
        name: '',
        email: '',
        password: '',
      })
    }

    if(auth._id) return navigate('/');

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className='formStyle1'
        onSubmit={handleSubmit}
        >
        <Typography variant="h5">SignUp</Typography>
        <TextField
          id="enter-name"
          label="enterName"
          variant="outlined"
          fullWidth
          className='spacing'
          value={user.name}
          onChange = {(e) => setUser({...user, name: e.target.value})}
        />
        <TextField
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          className='spacing'
          value={user.email}
          onChange = {(e) => setUser({...user, email: e.target.value})}
        />
        <TextField
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          className='spacing'
          value={user.password}
          onChange = {(e) => setUser({...user, password: e.target.value})}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className='spacing'
        >
          SignUp
        </Button>
      </form>
    </>
  );
};

export default SignUp;
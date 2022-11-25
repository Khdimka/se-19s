import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";

import { Typography, TextField, Button } from "@mui/material";


const SignIn = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const auth = useSelector(state => state.auth)
    const [creds, setCreds] = useState({
    email: '',
    password: ''
})
const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(signIn(creds))
    setCreds({
        email: '',
        password: '',
    })
};

if(auth._id) return navigate('/');
  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className='formStyle1'
        onSubmit = {handleSubmit}
        >
        <Typography variant="h5">signIn</Typography>
        <TextField
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          className='spacing'
          value = {creds.email}
          onChange = {(e) => setCreds({...creds, email: e.target.value })}
        />
        <TextField
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          className='spacing'
          value = {creds.password}
          onChange = {(e) => setCreds({...creds, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className='spacing'
        >
          SignIn
        </Button>
      </form>
    </>
  );
};

export default SignIn;
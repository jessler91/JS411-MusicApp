import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const Login = (props) => {
  return (
      <form>
          <TextField required id="outlined-required" label="Username" type='text' />
          <TextField required id="outlined-required" label="Password" type="password" />
          <Button variant="contained" color="primary" size="large" onClick={props.onClick}>Login</Button>
      </form>
      
  )
}

export default Login;
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import './Login.css';

const Forgot = () => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('state values are ', state);
  };

  return (
    <Container maxWidth='xs'>
      <CssBaseline />
      <div className='paper'>
        <Avatar className='avatar'>
          <LockIcon />
        </Avatar>
        <Typography variant='h5'>Academic Tracking: Forgot Password</Typography>
        <form className='form' onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <TextField
              required
              fullWidth
              type='email'
              label='Email'
              value={state.email}
              onChange={(event) => {
                setState((st) => {
                  return { ...st, email: event.target.value };
                });
              }}
            />
          </div>

          <div>
            <Button type='submit' variant='contained' fullWidth>
              Reset Password
            </Button>
            <Grid container style={{ marginTop: '15px' }}>
              <Grid item xs>
                <a href='/login' className='link'>
                  Sign in
                </a>
              </Grid>
              <Grid item xs>
                <a href='/register' className='link'>
                  Don't have an account? Sign up
                </a>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Forgot;

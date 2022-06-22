import './login.css';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Login() {

    return (
        <div className='page'>
            <div className='loginIcon'>
                <Avatar sx={{ m: 1, bgcolor: '#5151A2' }}>
                    <LockOutlinedIcon />
                </Avatar>
            </div>
            <div className='Login'>
                <div className='signIn'>
                    <h2>Sign in</h2>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="account"
                        label="Account"
                        name="account"
                        autoComplete="account"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Link to="/home" style={{ textDecoration: 'none' }} ><Button type="submit" fullWidth variant="contained" sx={{ mt: 3, bgcolor: '#8080C0' }}>Sign In</Button></Link>
                    <Link to="/register" variant="body2" sx={{ color: '#8080C0' }}>
                        {"Don't have an account? Sign Up"}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
import './login.css';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



function Register() {
    return (
        <div className='page'>
            <div className='loginIcon'>
                <Avatar sx={{ m: 1, bgcolor: '#5151A2' }}>
                    <LockOutlinedIcon />
                </Avatar>
            </div>
            <div className='Login'>
                <div className='signIn'>
                    <h2>Sign up</h2>
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="passwordAgain"
                        label="Password Again"
                        type="password"
                        id="passwordAgain"
                        autoComplete="current-password-again"
                    />
                    <Link to="../" style={{ textDecoration: 'none' }} ><Button type="submit" fullWidth variant="contained" sx={{ mt: 3, bgcolor: '#8080C0' }}>Sign Up</Button></Link>
                    <Link to="../" variant="body2" sx={{ color: '#8080C0' }}>
                        {"Already have an account? Sign In"}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
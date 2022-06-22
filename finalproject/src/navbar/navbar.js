import Avatar from '@mui/material/Avatar';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Button from '@mui/material/Button';
import './navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="container">
                <div className="avatar">
                    <Avatar sx={{ m: 1, bgcolor: '#4615b2' }}>
                        <PersonRoundedIcon />
                    </Avatar>
                </div>
                <div className='logOut'>
                    <Button variant="outlined">
                        Log out
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
import './home.css';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="Home">
            <div className='homeUser'>
                <Avatar sx={{ width: '80px', height: '80px', position: 'absolute', left: '2%', top: '3%', bgcolor: '#8080C0' }}>
                    <PersonIcon sx={{ width: '60px', height: '60px' }} />
                </Avatar>
                <Button type="submit" variant="contained" sx={{ position: 'absolute', left: '2%', top: '21%', bgcolor: '#8080C0' }}>news</Button>
                <Link to="../" style={{ textDecoration: 'none' }} >
                    <Button type="submit" variant="contained" sx={{ position: 'absolute', right: '1%', top: '3%', bgcolor: '#8080C0' }}>Sign out</Button>
                </Link>
                <div className='post'>

                </div>
                <Avatar sx={{ position: 'absolute', right: '3%', bottom: '5%', color: '#8080C0', bgcolor: '#F3F3FA' }}>
                    <AddCircleOutlinedIcon sx={{ width: '48px', height: '48px' }} />
                </Avatar>
            </div>
        </div>
    );


}

export default Home;
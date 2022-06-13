import React, { Component } from "react";
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WebIcon from '@mui/icons-material/Web';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PeopleIcon from '@mui/icons-material/People';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAvatar: null,
            userName: null,
            userLocation: null,
            userBlog: null,
            userFollowers: null,
            userFollowing: null,
            userID: null
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/users/cjwu", { method: "GET" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ userAvatar: data.avatar_url })
                this.setState({ userName: data.name })
                this.setState({ userLocation: data.location })
                this.setState({ userBlog: data.blog })
                this.setState({ userFollowers: data.followers })
                this.setState({ userFollowing: data.following })
                this.setState({ userID: data.id })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <div style={{ position: "absolute", left: "43%", top: "10%" }}>
                <div><Avatar alt={this.state.userID} src={this.state.userAvatar} sx={{ width: 140, height: 140 }} /></div>
                <h3><AccountCircleIcon /> {this.state.userName}</h3>
                <h4><AirplanemodeActiveIcon /> {this.state.userLocation}</h4>
                <h4><WebIcon /> {this.state.userBlog}</h4>
                <h4><PeopleIcon /> {this.state.userFollowers} followers</h4>
                <h4><PeopleIcon /> {this.state.userFollowing} following</h4>
            </div>);
    }

}

export default UserProfile;
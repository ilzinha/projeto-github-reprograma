import React, { Component } from 'react';
import Profile from '../../Components/Profile/Profile';
import Api from '../../Services/api'
import Repositories from '../../Components/Repositories/Repositories';

import './UserProfile.css'


class UserProfile extends Component {

    constructor() {
        super();

        this.state = {
            user: '',
            repos: []
        };
    }

    componentDidMount = async () => {
        const { location } = this.props;

        const user = location.state.login

        const repos = await Api.get(`/users/${user}/repos`)

        this.setState({ user, repos:repos.data })

        

    }


    render() {
        const { repos } = this.state;
        const { name, bio, avatar_url, location, repos_url, followers, following } = this.props.history.location.state

        return (
            <div className="userProfile__container">

                <div className="userProfile">
                    <Profile
                        name={name}
                        bio={bio}
                        photo={avatar_url}
                        location={location}
                        repositories={repos_url.length}
                        followers={followers}
                        following={following}
                    />
                </div>
                <hr className="line"/>
                <div className="userRepos">
                   <Repositories repos={repos} />

                </div>
            </div>

        );
    }
}

export default UserProfile;

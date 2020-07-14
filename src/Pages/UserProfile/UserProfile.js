import React, { Component } from 'react';
import Profile from '../../Components/Profile/Profile';
import Api from '../../Services/api'
// import Repositories from '../../Components/Repositories/Repositories';


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
        const repos = await Api.get(`/users/${this.state.user}/repos`)

        this.setState({ user: location.state.response.login, repos })

    }

    // getRepos = async (user) => {
    //     const { data } = await Api.get(`/users/${this.state.user}/repos`)
    //     console.log(data)
    //     return data;
    // }


    render() {
        const { repos } = this.state;
        console.log(this.props.history.location.state.repos_url)
        // console.log(repos)
        const { name, bio, avatar_url, location, repos_url, followers, following } = this.props.history.location.state
        return (
            <div>

                <div>
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
                <div>

                    {repos.length ? (
                        <Repositories repos={repos_url} />
                    ) : (
                            <h3>Nenhum repositório encontrado</h3>
                        )}
                </div>
            </div>

        );
    }
}

export default UserProfile;

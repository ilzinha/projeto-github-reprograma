import React, { Component } from 'react';
import MainTitle from '../../Components/MainTitle/MainTitle';
import SearchBar from '../../Components/SearchBar/SearchBar';
import api from '../../Services/api';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            user: ''
        }
        
    }
  
    handleChange = (e) => {
        this.setState({ user: e.target.value });

    };


    getUser = async (user) => {
        const { data } = await api.get(`/users/${this.state.user}`)
        console.log(data)
        return data;
    }

    getRepos = async (user) => {
        const { data } = await api.get(`/users/${this.state.user}/repos`)
        console.log(data)
        return data;
    }

    render() {

        const { user } = this.state;
        console.log(user)
        return (
            <div>
                <MainTitle title="Github Search" />
                <SearchBar
                    placeholder='Digite um usuário'
                    text='search'
                    type='text'
                    value={user}
                    onChange={this.handleChange}
                    onClick={this.getUser}
                />

            </div>
        );
    }
}

export default Home;
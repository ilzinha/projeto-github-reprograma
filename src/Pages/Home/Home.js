import React, { Component } from 'react';
import MainTitle from '../../Components/MainTitle/MainTitle';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Api from '../../Services/api';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            user: '',
            error: ''
        }

    }


    handleChange = (e) => {
        this.setState({ user: e.target.value });

    };

    seacrhUser = async () => {
        const { user } = this.state

        user
            ? await Api.get(`/users/${this.state.user}`)
                .then(response => {
                    this.props.history.push({
                        pathname: '/userprofile',
                        state: response.data
                    })
                })
                .catch(error =>
                    this.setState({ error: 'Nenhum usuário encontrado!', user: '' })
                )
            : this.setState({ error: 'Por favor, insira usuário!' });
    };



    render() {

        const { user, error } = this.state;

        return (
            <div>
                <MainTitle title="Github Search" />
                <SearchBar
                    placeholder='Digite um usuário'
                    text='search'
                    type='text'
                    value={user}
                    onChange={this.handleChange}
                    onClick={this.seacrhUser}
                />
                {error && <h3>{error}</h3>}

            </div>
        );
    }
}

export default Home;
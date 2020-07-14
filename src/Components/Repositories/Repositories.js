import React from 'react';
import './Repositories.css';

const Repositories = ({ repos_url }) => {
    return (

        <div>
            {repos_url.map((repo) => {
                console.log(repo)
                return (
                    <div>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <p>estrela</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Repositories;

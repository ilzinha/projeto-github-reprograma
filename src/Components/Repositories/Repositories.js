import React from 'react';
import IconStar from '../../Images/star-icon.svg'

import './Repositories.css';

const Repositories = ({ repos }) => {
    return (

        <div className="repos__container">
            {repos
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .map((repo, index) => {
                    return (
                        <div className="repoCard" key={`repo_${index + 1}`}>
                            <a href={repo.html_url} className="repoName">{repo.name}</a>
                            <p>{repo.description}</p>
                            <div className="stars">
                                <img src={IconStar} alt="icone estrela"/>
                                <p>{repo.stargazers_count}</p>
                            </div>
                            <hr/>
                        </div>
                    )
                })}

        </div>
    )
}

export default Repositories;

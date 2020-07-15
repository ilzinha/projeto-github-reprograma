import React from 'react'
import IconLocation from '../../Images/location-icon.svg';

import './Profile.css';

const Profile = ({ name, photo, altPhoto, bio, location, repositories, followers, following }) => {
    return (
        <div>
            <img className="photo" src={photo} alt={altPhoto} />

            <div className="bio">
                <h1>{name}</h1>
                <h4>{bio}</h4>
            </div>

            <div className="iconNumbers">
                <img src={IconLocation} alt="Icone de localização" />
                <p>{location}</p>
            </div>

            <div className="iconNumbers">   
                <p>Repositórios : <span>{repositories}</span></p>
            </div>

            <div className="iconNumbers">
               
                <p> Seguidores: <span>{followers}</span></p>
            </div>

            <div className="iconNumbers">
                
                <p>Seguindo: <span>{following}</span></p>
            </div>
        </div>
    )
}


export default Profile;
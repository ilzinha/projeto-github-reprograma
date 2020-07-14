import React from 'react'
import './Profile.css';

const Profile = ({ name, photo, altPhoto, bio, location, repositories, followers, following }) => {
    return (
        <div>
            <img src={photo} alt={altPhoto} />
            <h1>{name}</h1>
            <h4>{bio}</h4>
            <p>{location}</p>
            <p>{repositories}</p>
            <p>{followers}</p>
            <p>{following}</p>
        </div>
    )
}


export default Profile;
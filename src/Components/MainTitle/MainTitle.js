import React from 'react';
import './MainTitle.css'

const MainTitle = ({ title }) => {
    return(
        <div>
            <h1 className="title">{title}</h1>
        </div>
    )
}

export default MainTitle;
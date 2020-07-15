import React from 'react';
import './SearchBar.css';

const SearchBar = ({ placeholder, text, onClick, value, type, onChange}) => {
    return (
        <div className="login-box">
            <input value={value} placeholder={placeholder} type={type} onChange={onChange} />
            <button className="btn" onClick={onClick}>{text}</button>
        </div>
    )
}

export default SearchBar;
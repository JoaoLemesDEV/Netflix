import React from 'react';
import './Header.css';

export default ({black})=>{
    return (
        <header className={black ? 'black' : ''}>
            <div className="Header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
                </a>
            </div>
            <div className="Header--user">
                <a href="/">
                    <img src="https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg" alt="Usuário" />
                </a>
            </div>
        </header>
    )
}
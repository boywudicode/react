import React from 'react';
import Logo from '../Logo.js'
import Nav from '../Nav/Nav.js'
import Button from '../Button/Button.js'
import "./Header.css"


const Header = () => {
    return (
        <header className='header'>
            <Logo text="MUSTANQ" />
            <Nav/>
            <div>
                <Button text="SIGN UP" color="blue" size="sm"/>
                <Button text="LOGIN" size="sm" color="orange" type="rounded" />
            </div>
        </header>
    )
}

export default Header
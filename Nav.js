import React from "react"
import { Link } from "react-router-dom"
import"./Nav.css"

const Nav = () => {
    return (
        <nav className="navig">
            <ul className="nav-lists">
                <Link to = "/" className = "link">Home</Link>
                <Link to = "/Contact" className = "link">Contact</Link>
                <Link to = "/Blog" className = "link">Blog</Link>
                <Link to = "/About" className="link">About</Link>
            </ul>
        </nav>
    )
}

export default Nav
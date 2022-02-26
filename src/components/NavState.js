import {React, useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const NavState = () => {
    const url = window.location.href;
    const [activePage, setActivePage] = useState(url)

    useEffect(()=>{
        setActivePage(url)
    })

    switch(activePage){
        case 'http://localhost:3000/':
        return(
            <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to ="/news">News</Link></li>
            <li><Link to="/about">About</Link></li>
            </ul>
        );
        case 'http://localhost:3000/news':
            return(
                <ul>
                <li><Link to="/">Home</Link></li>
                <li className="active"><Link to ="/news">News</Link></li>
                <li><Link to="/about">About</Link></li>
                </ul>
            );
        case 'http://localhost:3000/about':
            return(
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to ="/news">News</Link></li>
                <li className="active"><Link to="/about">About</Link></li>
                </ul>
            )
    }
}

export default NavState
import React from 'react'
import {Link} from 'react-router-dom'
import NavState from './NavState'

class Nav extends React.Component {
    render() {
        return  (
                        <div>
                            <NavState />
                            {/* <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to ="/news">News</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul> */}
                        </div>
        )
    }
}

export default Nav
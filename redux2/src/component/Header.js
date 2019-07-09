import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">Redux News APP</Link>
                <Link className="btn btn-primary" to="/forms">Forms</Link>
            </div>
        </header>
    )
}

export default Header;
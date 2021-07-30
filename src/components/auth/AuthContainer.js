import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <span>                
              <Link to={'/login'} className="btn btn-success btn-sm">Войти</Link>
              {/* <Link to={'/register'} className="btn btn-success btn-sm">Register</Link> */}
            </span>
        )
    }
}

export default AuthContainer;
import React from 'react';
import {Link} from 'react-router-dom';
import SignOutButton from '../SignOut';

import * as ROUTES from '../../constants/routes';
import {AuthUserContext} from '../Session';

const Navigation = () => {
    return(
        <AuthUserContext.Consumer>
            {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
        </AuthUserContext.Consumer>
    )
}

const NavigationAuth = () => {
    return(
        <ul>
            <li>
                <Link to = {ROUTES.LANDING}>Landing</Link>
            </li>                
            <li>
                <Link to = {ROUTES.HOME}>Home</Link>
            </li>                
            <li>
                <Link to = {ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
                <SignOutButton />
            </li>
        </ul>
    )
}

const NavigationNonAuth = () => {
    return(
        <ul>
            <li>
                <Link to = {ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to = {ROUTES.LANDING}>Landing</Link>
            </li> 
        </ul>
    )
}

export default Navigation;
import React, {useEffect} from 'react';
import { logout } from '../../services/authService';

const Logout = () => {

    useEffect(()=> {
        logout();
    })

    return ( null );
}
 
export default Logout;
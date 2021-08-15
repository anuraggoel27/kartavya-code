import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";
const LogoutButton = () => {
    const {logout, isAuthenticated}= useAuth0();
    return (
        isAuthenticated && (
            <div className="admin-button">
            <Fab className="query-button" variant="extended" onClick={()=>logout()}>
            <img src="/images/logout.png" className="button-icon"></img>
            Logout
        </Fab>
        </div>
        )
        
    )
}

export default LogoutButton

import React, {use, useContext} from 'react'
import UserContext from '../Contexts/UserContext.js'

const Profile = () => {
    const {user} = useContext(UserContext);
    
    if(!user) return <div>Please Login</div>;

    return <div>
        Welcome {user.username}
    </div>
}

export default Profile

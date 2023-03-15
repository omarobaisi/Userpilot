import React, { useEffect, useContext } from 'react';
import { useParams, useLocation  } from "react-router-dom";

import { UserContext } from '../context/user.context';

import UserInfo from '../components/user-info/user-info.component';
import UserListing from './user-listing.route';

function UserDetail() {

    const { users } = useContext(UserContext);
    const { setSelectedUser } = useContext(UserContext);

    let { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        console.log(users);
        console.log(id);
        const user = users.find(user => user.id == id);
        console.log(user);
        setSelectedUser(user);
    }, [location])

    return (
        <div>
            <UserListing />
            <UserInfo />
        </div>
    );
}

export default UserDetail;
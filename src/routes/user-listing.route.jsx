import React, { useEffect, useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../context/user.context';

import UserTable from '../components/user-table/user-table.component';
import UserSearch from '../components/user-search/user-search.component';

function UserListing() {

    const { users } = useContext(UserContext);

    return (
        <div>
            <div>Users</div>
            {users ? <UserTable /> : <UserSearch /> }
        </div>
    );
}

export default UserListing;
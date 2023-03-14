import React, { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function UserInfo() {

    const { selectedUser } = useContext(UserContext);

    return (
        <div>
            <img src={selectedUser.imgUrl} alt="" />
            <div>{selectedUser.name}</div>
            <div>{selectedUser.address}</div>
        </div>
    );
}

export default UserInfo;
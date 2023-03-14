import React from 'react';
import { useNavigate } from "react-router-dom";

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function UserColumn({ user }) {

    const navigate = useNavigate();

    const getSelectedUser = () => {
        navigate(`/user/${user.id}`);
    }

    return (
        <TableRow
        key={user.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        onClick={getSelectedUser}
        >
            <TableCell component="th" scope="row">
                <div>{user.name}</div>
                <div>{user.address}</div>
            </TableCell>
            <TableCell>
                <div>{user.email}</div>
                <div>{user.phone}</div>
            </TableCell>
            <TableCell>
                <div>{user.registrationDate}</div>
                <div>{user.registrationTime}</div>
            </TableCell>
            <TableCell>
                <div>{user.country}</div>
                <div>{user.postCode}</div>
            </TableCell>
        </TableRow>
    );
}

export default UserColumn;
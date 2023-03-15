import React from 'react';
import { useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';

const Name = styled('form')(() => ({
    display: 'flex',
    alignItems: 'center',
}));

const Bold = styled('form')(() => ({
    fontWeight: '800',
}));

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
        style={{ padding: '0 50px' }}
        >

            <TableCell component="th" scope="row">
                <Name>
                    <Avatar style={{ marginRight: '20px', }} alt="Remy Sharp" src={user.imgUrl} />
                    <div>
                        <Bold>{user.name}</Bold>
                        <div>{user.address}</div>
                    </div>
                </Name>
            </TableCell>
            <TableCell>
                <Bold>{user.email}</Bold>
                <div>{user.phone}</div>
            </TableCell>
            <TableCell>
                <Bold>{user.registrationDate}</Bold>
                <div>{user.registrationTime}</div>
            </TableCell>
            <TableCell>
                <Bold>{user.country}</Bold>
                <div>{user.postCode}</div>
            </TableCell>
        </TableRow>
    );
}

export default UserColumn;
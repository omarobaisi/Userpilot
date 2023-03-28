import React, { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const Container = styled('div')(() => ({
    position: 'absolute',
    top: '0',
    right: '0',
    width: '40%',
    height: '100%',
    minHeight: '100vh',
    background: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    alignItems: 'center'
}));

const Blue = styled('div')(({ theme }) => ({
    position: 'absolute',
    height: '158px',
    width: '100%',
    background: theme.palette.background.blue,
}));

const Name = styled('div')(({ theme }) => ({
    fontSize: theme.weight.small,
    fontWeight: theme.weight.bold,
    margin: '15px 0'
}));

function UserInfo() {

    const { selectedUser } = useContext(UserContext);

    return (
        <Container>
            <Blue></Blue>
            <Avatar src={selectedUser.imgUrl} alt={selectedUser.name} sx={{ width: 120, height: 120, marginTop: '100px' }}></Avatar>
            <Name>{selectedUser.name}</Name>
            <div>{selectedUser.address}</div>
        </Container>
    );
}

export default UserInfo;
import React from 'react';
import { styled } from '@mui/material/styles';

import Logo from '../../img/Logo.png'
import Overview from '../../img/Overview.png'
import Tickets from '../../img/Tickets.png'
import Ideas from '../../img/Ideas.png'
import Users from '../../img/Users.png'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const LogoDiv = styled('div')(() => ({
    textAlign: 'center',
}));

const LogoImg = styled('img')(() => ({
    width: '70%',
    marginTop: '30px',
}));

const SideImg = styled('img')(() => ({
    width: '20px',
}));

function Sidebar(props) {
    return (
        <div>
            <LogoDiv><LogoImg src={Logo} alt=""></LogoImg></LogoDiv>
            <List sx={{ width: '100%', maxWidth: 360, margin: '40px 0' }}>
                <ListItem>
                    <ListItemAvatar>
                        <SideImg src={Overview} alt="" />
                    </ListItemAvatar>
                    <ListItemText primary="Overview" />
                </ListItem>
                <ListItem sx={{ margin: '20px 0' }}>
                    <ListItemAvatar>
                        <SideImg src={Tickets} alt="" />
                    </ListItemAvatar>
                    <ListItemText primary="Tickets" />
                </ListItem>
                <ListItem sx={{ margin: '20px 0' }}>
                    <ListItemAvatar>
                        <SideImg src={Ideas} alt="" />
                    </ListItemAvatar>
                    <ListItemText primary="Ideas" />
                </ListItem>
                <ListItem sx={{ background: '#9FA2B4', color: '#DDE2FF', borderLeft: '5px solid #DDE2FF' }}>
                    <ListItemAvatar>
                        <SideImg src={Users} alt="" />
                    </ListItemAvatar>
                    <ListItemText primary="Users" />
                </ListItem>
            </List>
        </div>
    );
}

export default Sidebar;
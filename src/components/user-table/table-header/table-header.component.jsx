import React from 'react';
import { styled } from '@mui/material/styles';
import CurrentUser from '../../../img/CurrentUser.png'

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const UsersText = styled('div')(({ theme }) => ({
    margin: '25px 20px',
    fontSize: theme.weight.meduim,
    fontWeight: theme.weight.bold,
}));

function TableHeader(props) {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <UsersText>Users</UsersText>
                </Grid>
                <Grid item xs={2}>
                    <List sx={{ width: '100%', maxWidth: 220, bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemText sx={{ fontSize: '5px' }} primary="Jones Ferdinand" />
                            <ListItemAvatar>
                                <Avatar sx={{ borderRadius: '50%', border: '3px solid #DDE2FF' }} alt="Jones Ferdinand" src={CurrentUser} />
                            </ListItemAvatar>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}

export default TableHeader;
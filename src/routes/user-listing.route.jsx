import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { UserContext } from '../context/user.context';

import UserTable from '../components/user-table/user-table.component';
import UserSearch from '../components/user-search/user-search.component';
import Sidebar from '../components/sidebar/sidebar.component';

const SideGrid = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.secondary,
    color: theme.palette.text.gray,
    height: '100vh',
    padding: '25px'
}));

function UserListing() {

    const { users } = useContext(UserContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={2}>
                    <SideGrid>
                        <Sidebar />
                    </SideGrid>
                    
                </Grid>
                <Grid item xs={10}>
                <div>{users ? <UserTable /> : <UserSearch /> }</div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserListing;
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { UserContext } from '../context/user.context';

import UserTable from '../components/user-table/user-table.component';
import UserSearch from '../components/user-search/user-search.component';
import Sidebar from '../components/sidebar/sidebar.component';
import TableHeader from '../components/user-table/table-header/table-header.component';

const SideGrid = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.gray,
    color: theme.palette.text.gray,
    height: '100%',
    minHeight: '100vh',
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
                    <div sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TableHeader />
                    </div>
                <div>{users ? <UserTable /> : <UserSearch /> }</div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserListing;
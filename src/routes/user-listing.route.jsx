import React, { useEffect, useContext } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { UserContext } from '../context/user.context';

import UserTable from '../components/user-table/user-table.component';
import UserSearch from '../components/user-search/user-search.component';

function UserListing() {

    const { users } = useContext(UserContext);

    return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item xs={2}>
                        <div>sidebar</div>
                    </Grid>
                    <Grid item xs={10}>
                    <div>{users ? <UserTable /> : <UserSearch /> }</div>
                    </Grid>
                </Grid>
            </Box>
    );
}

export default UserListing;
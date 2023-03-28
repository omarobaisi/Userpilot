import React, { useContext } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { UserContext } from '../../context/user.context'

import TableTop from './table-top/table-top.component'
import TableButtom from './table-buttom/table-buttom.component';
import UserInfo from '../user-info/user-info.component';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserColumn from '../user-column/user-column.component';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  return { formattedDate, formattedTime }
}

const filterUsers = (users) => {
  users = users.map((user, i) => {
      const { formattedDate, formattedTime } = formatDate(user.registered.date);
      return {
          name: `${user.name.first} ${user.name.last}`,
          address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}`,
          country: user.location.country,
          postCode: user.location.postcode,
          registrationDate: formattedDate,
          registrationTime: formattedTime,
          email: user.email,
          phone: user.phone,
          imgUrl: user.picture.large,
          id: i,
      }
  })
  return users
}

const fetchUsers = async (usersNum, usersPage) => {
  let users = await axios.get(`https://randomuser.me/api?results=${usersNum}&page=${usersPage}`);
  users = users.data.results;
  return filterUsers(users)
}

const Container = styled('form')(({ theme }) => ({
  border: `1px solid ${theme.palette.background.lightGray}`,
  borderRadius: '8px',
  margin: '30px 20px',
}));

function UserTable() {

  const { users, setUsers } = useContext(UserContext);
  const { usersNum } = useContext(UserContext);
  const { usersPage } = useContext(UserContext);
  const { UserPopup } = useContext(UserContext);

  const getUsers = async () => {
    const users = await fetchUsers(usersNum, usersPage);
    setUsers(users)
  }

  return (
    <>
      <Container>
        <TableTop filterUsers={filterUsers} />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Contact Information</TableCell>
                <TableCell>Registration Date</TableCell>
                <TableCell>Country/Post Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { users && users.map((user, i) => <UserColumn user={user} key={i} />) }
            </TableBody>
          </Table>
        </TableContainer>

        <TableButtom getUsers={getUsers} />
      </Container>

      {console.log(UserPopup)}
      {UserPopup && <UserInfo />}
    </>
  );
}

export default UserTable;
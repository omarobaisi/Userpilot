import React, { useContext } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { UserContext } from '../../context/user.context'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserColumn from '../user-column/user-column.component';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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



const Container = styled('form')(() => ({
  border: '1px solid #9FA2B4',
  borderRadius: '8px',
  margin: '30px 20px',
}));

const Form = styled('form')(() => ({
  textAlign: 'end'
}));

const TableTop = styled('form')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '32px'
}));

const TableButtom = styled('form')(() => ({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  padding: '15px'
}));

const Dropdown = styled('form')(() => ({
  margin: '0 15px',
}));

const NextPage = styled('form')(() => ({
  fontSize: '25px',
  padding: '0 10px'
}));

function UserTable() {

  const { users, setUsers } = useContext(UserContext);
  const { usersNum, setUsersNum } = useContext(UserContext);
  const { usersPage, setUsersPage } = useContext(UserContext);
  const { gender, setGender } = useContext(UserContext);
  const { nationality, setNationality } = useContext(UserContext);

  const getUsers = async () => {
    const users = await fetchUsers(usersNum, usersPage);
    setUsers(users)
  }

  const setRowsNumber = (event) => {
    const usersNum = parseInt(event.target.value);
    setUsersNum(usersNum);
  }

  const setPrevPage = () => {
    const currentPage = usersPage - 1;
    if(currentPage > 0) {
      setUsersPage(currentPage);
      getUsers()
    }
  }

  const setNextPage = () => {
    const currentPage = usersPage + 1;
    if(currentPage < 10) {
      setUsersPage(currentPage);
      getUsers()
    }
  }

  const searchByGenderAndNatonality = (event) => {
    event.preventDefault();
    const genderInput= document.querySelector(".gender");
    const natInput= document.querySelector(".nat");
    genderInput.value = "";
    natInput.value = "";
    axios.get(`https://randomuser.me/api/?results=${usersNum}&gender=${gender}&nat=${nationality}`)
    .then(res => res.data.results)
    .then(userData => setUsers(filterUsers(userData)))
  }

  const setUserGender = (event) => {
    const usersGender = parseInt(event.target.value);
    setGender(usersGender);
  }

  const setUserNat = (event) => {
    const usersNationality = parseInt(event.target.value);
    setNationality(usersNationality);
  }

  return (
    <Container>
      <TableTop>
        <div>All Users</div>
        <Form>
          <TextField onChange={setUserGender} InputProps={{ style: { height: '40px', width: '200px' } }} id="outlined-basic" label="Gender" variant="outlined" type="text" name='gender' className='gender' />
          <TextField onChange={setUserNat} InputProps={{ style: { height: '40px', width: '200px' } }} id="outlined-basic" label="Nationality" variant="outlined" type="text" name='nationality' className='nat' />
          <Button onClick={searchByGenderAndNatonality} variant="text">Search</Button>
        </Form>
      </TableTop>
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
      <TableButtom>
        Rows per page:  
        <Dropdown>
          <Select
            value={usersNum}
            label="Pages"
            name="pages" 
            onChange={setRowsNumber}
          >
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="11">11</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="13">13</MenuItem>
            <MenuItem value="14">14</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="16">16</MenuItem>
            <MenuItem value="17">17</MenuItem>
            <MenuItem value="18">18</MenuItem>
            <MenuItem value="19">19</MenuItem>
            <MenuItem value="20">20</MenuItem>
          </Select>
          <Button variant="text" onClick={getUsers}>Search</Button>
        </Dropdown>
        <NextPage onClick={setPrevPage}>&lt;</NextPage> <NextPage onClick={setNextPage}>&gt;</NextPage>
      </TableButtom>
    </Container>
  );
}

export default UserTable;
import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/user.context'

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

function UserTable() {

  const { users, setUsers } = useContext(UserContext);
  const { usersNum, setUsersNum } = useContext(UserContext);
  const { usersPage, setUsersPage } = useContext(UserContext);

  const getUsers = async () => {
    const users = await fetchUsers(usersNum, usersPage);
    setUsers(users)
  }

  const setRowsNumber = (event) => {
    const usersNum = parseInt(event.target.value);
    setUsersNum(usersNum);
    getUsers()
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
    const gender = event.target.gender.value;
    const nationality = event.target.nationality.value;
    const genderInput= document.querySelector(".gender");
    const natInput= document.querySelector(".nat");
    genderInput.value = "";
    natInput.value = "";
    axios.get(`https://randomuser.me/api/?results=${usersNum}&gender=${gender}&nat=${nationality}`)
    .then(res => res.data.results)
    .then(userData => setUsers(filterUsers(userData)))
  }

  return (
    <div>
      <div>All Users</div>
      <div>
        <form onSubmit={searchByGenderAndNatonality}>
          <input type="text" placeholder='Gender' name='gender' className='gender' />
          <input type="text" placeholder='Nationality' name='nationality' className='nat' />
          <button>Search</button>
        </form>
      </div>
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
      <div>
        Rows per page:  
        <select name="pages" id="pages" value={usersNum} onChange={setRowsNumber}>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>s
        </select>
        <span onClick={setPrevPage}>prev</span> <span onClick={setNextPage}>next</span>
      </div>
    </div>
  );
}

export default UserTable;
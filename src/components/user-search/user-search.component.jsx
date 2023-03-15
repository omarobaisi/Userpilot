import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/user.context'

import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center ',
    alignItems: 'center',
    padding: '15px',
    marginTop: '300px',
}));

function UserSearch(props) {

    const { setUsers } = useContext(UserContext);
    const { usersNum, setUsersNum } = useContext(UserContext);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        return { formattedDate, formattedTime }
    }
    
    const fetchAndFilterUsers = async (usersNum) => {
        let users = await axios.get(`https://randomuser.me/api?results=${usersNum}`);
        users = users.data.results;
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

    const setRowsNumber = (event) => {
        const usersNum = parseInt(event.target.value);
        setUsersNum(usersNum);
    }

    const getUsers = () => {
        const getUsers = async () => {
            const users = await fetchAndFilterUsers(usersNum);
            console.log(users)
            setUsers(users)
        }
        getUsers()
    }

    return (
        <Container>
            <div>Number of results:</div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">res</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={usersNum}
                onChange={setRowsNumber}
                autoWidth
                label="Age"
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
            </FormControl>
            <div><Button onClick={getUsers}>Search</Button></div>
        </Container>
    );
}

export default UserSearch;
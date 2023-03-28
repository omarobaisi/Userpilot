import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../context/user.context'
import { styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Container = styled('form')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '32px'
}));

const Form = styled('form')(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
}));

function TableTop({ filterUsers }) {

    const { setUsers } = useContext(UserContext);
    const { usersNum } = useContext(UserContext);
    const { gender, setGender } = useContext(UserContext);
    const { nationality, setNationality } = useContext(UserContext);

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
        const usersGender = event.target.value;
        setGender(usersGender);
    }
    
    const setUserNat = (event) => {
        const usersNationality = event.target.value;
        setNationality(usersNationality);
    }

    return (
        <Container>
            <div>All Users</div>
            <Form>
                <TextField size="small" onChange={setUserGender} InputProps={{ style: { width: '200px' } }} id="outlined-basic" label="Gender" variant="outlined" type="text" name='gender' className='gender' />
                <TextField size="small" onChange={setUserNat} InputProps={{ style: { width: '200px' } }} id="outlined-basic" label="Nationality" variant="outlined" type="text" name='nationality' className='nat' />
                <Button onClick={searchByGenderAndNatonality} variant="text">Search</Button>
            </Form>
        </Container>
    );
}

export default TableTop;
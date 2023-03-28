import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../../context/user.context'
import { styled } from '@mui/material/styles';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Container = styled('form')(() => ({
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

function TableButtom({ getUsers }) {

    const { usersNum, setUsersNum } = useContext(UserContext);
    const { usersPage, setUsersPage } = useContext(UserContext);

    useEffect(() => {
        getUsers()
    }, [usersNum, usersPage]);

    const setRowsNumber = (event) => {
        const usersNum = parseInt(event.target.value);
        setUsersNum(usersNum);
    }

    const setPrevPage = () => {
        const currentPage = usersPage - 1;
        if(currentPage > 0) {
          setUsersPage(currentPage);
        }
    }
    
    const setNextPage = () => {
        const currentPage = usersPage + 1;
        if(currentPage < 10) {
          setUsersPage(currentPage);
        }
    }

    return (
        <Container>
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
            </Dropdown>
            <NextPage onClick={setPrevPage}>&lt;</NextPage> <NextPage onClick={setNextPage}>&gt;</NextPage>
        </Container>
    );
}

export default TableButtom;
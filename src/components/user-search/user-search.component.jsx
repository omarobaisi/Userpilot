import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/user.context'

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
        <div>
            <div>
                Number of results:  
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
                    <option value="20">20</option>
                </select>
            </div>
            <div><button onClick={getUsers}>Search</button></div>
        </div>
    );
}

export default UserSearch;
// import React, {useContext} from 'react';
// import { UserContext } from '../../context/user.context'

// function TalbeButtom(props) {

//     const { users, setUsers } = useContext(UserContext);
//     const { usersNum, setUsersNum } = useContext(UserContext);
//     const { usersPage, setUsersPage } = useContext(UserContext);

//     const setRowsNumber = (event) => {
//     const usersNum = parseInt(event.target.value);
//     setUsersNum(usersNum);
//     getUsers()
//   }

//     return (
//         <div>
//             Rows per page:  
//             <select name="pages" id="pages" value={usersNum} onChange={setRowsNumber}>
//             <option value="5">5</option>
//             <option value="6">6</option>
//             <option value="7">7</option>
//             <option value="8">8</option>
//             <option value="9">9</option>
//             <option value="10">10</option>
//             <option value="11">11</option>
//             <option value="12">12</option>
//             <option value="13">13</option>
//             <option value="14">14</option>
//             <option value="15">15</option>
//             <option value="16">16</option>
//             <option value="17">17</option>
//             <option value="18">18</option>
//             <option value="19">19</option>
//             <option value="20">20</option>s
//             </select>
//             <span onClick={setPrevPage}>prev</span> <span onClick={setNextPage}>next</span>
//         </div>
//     );
// }

// export default TalbeButtom;
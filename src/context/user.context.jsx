import { createContext, useState } from "react";

// As the actual value you want to access
export const UserContext = createContext({
    setUsers: () => null,
    users: null,
    setUsersNum: () => null,
    usersNum: null,
    setUsersPage: () => null,
    usersPage: null,
    setSeed: () => null,
    seed: null,
    setSelectedUser: () => null,
    selectedUser: null,
});

export const UserProvider = ({ children }) => {
    const [ users, setUsers ] = useState('');
    const [ usersNum, setUsersNum ] = useState(8);
    const [ usersPage, setUsersPage ] = useState(1);
    const [ seed, setSeed ] = useState('');
    const [ selectedUser, setSelectedUser ] = useState({});

    const value = { users, setUsers, usersNum, setUsersNum, usersPage, setUsersPage, seed, setSeed, selectedUser, setSelectedUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
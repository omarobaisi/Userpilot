import React from 'react';
import { styled } from '@mui/material/styles';
import Logo from '../../img/Logo.png'

const LogoDiv = styled('div')(({ theme }) => ({
    textAlign: 'center',
}));

const LogoImg = styled('img')(({ theme }) => ({
    width: '70%',
    margin: 'auto',
}));

function Sidebar(props) {
    return (
        <div>
            <LogoDiv><LogoImg src={Logo} alt=""></LogoImg></LogoDiv>
            Sidebar
        </div>
    );
}

export default Sidebar;
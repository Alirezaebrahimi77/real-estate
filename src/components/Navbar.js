import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {menuData} from '../data/MenuData';
import {Button} from './Button';
import {FaBars} from 'react-icons/fa'



const Nav = styled.nav `
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
   
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    color: #fff;
    font-style:italic;
    text-decoration: none;
    
`;
const MenuBars = styled(FaBars)`
display: none;
@media screen and (max-width: 768px){
    display: block;
    background-size: contain;
    height: 26px;
    width: 26px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 55%);
    color: #fff;
}

`;
const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;
const NavMenulinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display:flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;
const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">ElIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
            {menuData.map((item, index) => (
                <NavMenulinks to={item.link} key={index}>
                    {item.title}
                </NavMenulinks>
            ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true'>Contact Us</Button>
            </NavBtn>

         
        </Nav>
    );
};

export default Navbar

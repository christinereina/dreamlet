import styled from 'styled-components';
import { WiStars } from "react-icons/wi";
import { Link } from 'react-router-dom';
import { Container } from '../globalStyles';

export const Nav = styled.nav`
background: #101522;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
text-decoration: none;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;
text-decoration: none;
${Container}
`;

export const NavLogo = styled(Link)`
text-decoration: none;
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 2em;
display: flex;
align-items: center;

&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
`;

export const NavIcon = styled(WiStars)`
margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 960px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
} 
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
text-decoration: none;
@media screen and (max-width: 960px) {
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 80px;
  left: ${({click}) => (click ? 0 : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background: #101522;

  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
}
}
`

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;  
}

@media screen and (max-width: 960px) {
  width: 100%;
  &:hover {
    border: none;
    text-decoration: none;  
  }
};
}
`
export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
  
  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
    text-decoration: none;
  }
}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  text-decoration: none;
}
`

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
width: 100%;
border: none;
outline: none;

&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
}
`
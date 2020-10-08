import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../globalStyles';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink  } from './Navbar.elements';


const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClicker = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={closeMobileMenu} click={click}>
            <NavIcon />
            Dreamlet
            </NavLogo>
          <MobileIcon onClick={handleClicker}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClicker} click={click}>
            <NavItem>
              <NavLinks to='/Dreamlets'>Dreams</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/Themes'>Common Themes</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/Signin">
                  <Button primary>Sign In</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/Signin">
                  <Button fontBig primary>
                    Sign In
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>  
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
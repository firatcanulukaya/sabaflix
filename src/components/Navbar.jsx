import {Nav, NavHamburger, NavInput, NavLink, NavLinks, NavLogo, NavSearchBox} from "../assets/style/styled";
import logo from "../assets/img/logo.svg";
import hamburger from "../assets/img/hamburger.svg"

const Navbar = ({navLinks}) => {
    return(
        <Nav>
            <NavHamburger>
                <img src={hamburger} alt={"Hamburger Menu"}/>
            </NavHamburger>
            <NavLogo>
                <img src={logo} alt={"Sabaflix Logo"}/>
                <NavLinks>
                    {navLinks.map((link, index) => <NavLink href={link.link} key={index}>{link.name}</NavLink> )}
                </NavLinks>
            </NavLogo>
            <NavSearchBox>
                <NavInput type="text" placeholder="Search"/>
            </NavSearchBox>
        </Nav>
    )
}

export default Navbar;
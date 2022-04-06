import {MobileNavbarClose, Nav, NavbarLogo, NavHamburger, NavLink, NavLinks, NavLogo, NavSearchBox} from "./style";
import logo from "../../assets/img/logo.svg";
import hamburger from "../../assets/img/hamburger.svg"
import cancel from "../../assets/img/Cancel.svg";
import {useEffect} from "react";
import SearchBox from "./SearchBox";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const navLinks = [
        {
            name: 'Home',
            link: '/',
            disabled: false
        },
        {
            name: 'Movies',
            link: '/movies',
            disabled: true
        },
        {
            name: 'Series',
            link: '/series',
            disabled: true
        },
        {
            name: "All",
            link: '/all',
            disabled: false
        }
    ]

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('active');
            } else {
                navbar.classList.remove('active');
            }
        })
    }, [])

    const handleNavbar = () => {
        const navbar = document.getElementById('navLinks');
        navbar.classList.toggle('active');
    }

    return (
        <Nav id="navbar">
            <NavHamburger onClick={() => handleNavbar()}>
                <img src={hamburger} alt={"Hamburger Menu"}/>
            </NavHamburger>
            <NavLogo>

                <NavbarLogo src={logo} alt={"Sabaflix Logo"} onClick={() => navigate('/')}/>

                <NavLinks id="navLinks">
                    <MobileNavbarClose src={cancel} onClick={() => handleNavbar()}/>
                    <NavbarLogo src={logo} alt={"Sabaflix Logo"} onClick={() => navigate('/')}/>
                    {navLinks.map((item, index) => <NavLink onClick={() => navigate(`${item.link}`)} key={index}
                                                            disabled={item.disabled}>{item.name}</NavLink>)}
                </NavLinks>

            </NavLogo>
            <NavSearchBox>
                <SearchBox/>
            </NavSearchBox>
        </Nav>
    )
}

export default Navbar;
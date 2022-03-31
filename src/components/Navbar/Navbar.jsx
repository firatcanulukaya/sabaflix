import {Nav, NavbarLogo, NavHamburger, NavInput, NavLink, NavLinks, NavLogo, NavSearchBox} from "./style";
import logo from "../../assets/img/logo.svg";
import hamburger from "../../assets/img/hamburger.svg"
import {useEffect} from "react";
import SearchBox from "./SearchBox";

const Navbar = () => {

    const navLinks = [
        {
            name: 'Home',
            link: '/',
            disabled: false
        },
        {
            name: 'Movies',
            link: '/',
            disabled: true
        },
        {
            name: 'Series',
            link: '/',
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

    return (
        <Nav id="navbar">
            <NavHamburger>
                <img src={hamburger} alt={"Hamburger Menu"}/>
            </NavHamburger>
            <NavLogo>
                <a href="/"><NavbarLogo src={logo} alt={"Sabaflix Logo"}/></a>
                <NavLinks>
                    {navLinks.map((item, index) => <NavLink href={item.link} key={index}
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
import {Nav, NavHamburger, NavInput, NavLink, NavLinks, NavLogo, NavSearchBox} from "./style";
import logo from "../../assets/img/logo.svg";
import hamburger from "../../assets/img/hamburger.svg"
import {useEffect} from "react";

const Navbar = () => {

    const navLinks = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Movies',
            link: '/movies'
        },
        {
            name: 'Series',
            link: '/series'
        },
        {
            name: "Last Added",
            link: '/last-added'
        },
        {
            name: "Most Popular",
            link: '/most-popular'
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

    return(
        <Nav id="navbar">
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
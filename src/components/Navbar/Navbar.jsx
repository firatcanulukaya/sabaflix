import {Nav, NavHamburger, NavInput, NavLink, NavLinks, NavLogo, NavSearchBox} from "./style";
import logo from "../../assets/img/logo.svg";
import hamburger from "../../assets/img/hamburger.svg"
import {useEffect} from "react";

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
            name: "Last Added",
            link: '#lastAdded',
            disabled: false

        },
        {
            name: "Most Popular",
            link: '#mostPopular',
            disabled: false
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

    return(
        <Nav id="navbar">
            <NavHamburger>
                <img src={hamburger} alt={"Hamburger Menu"}/>
            </NavHamburger>
            <NavLogo>
                <img src={logo} alt={"Sabaflix Logo"}/>
                <NavLinks>
                    {navLinks.map((item, index) => <NavLink href={item.link} key={index} disabled={item.disabled}>{item.name}</NavLink> )}
                </NavLinks>
            </NavLogo>
            <NavSearchBox>
                <NavInput type="text" placeholder="Search"/>
            </NavSearchBox>
        </Nav>
    )
}

export default Navbar;
import './assets/style/style.css';
import Navbar from "./components/Navbar";
import bg from "./assets/img/bg.png"
import {HeaderBg, HeaderContainer} from "./assets/style/styled";

const App = () => {

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

  return (
    <>
        <Navbar navLinks={navLinks}/>
        <HeaderContainer>
            <HeaderBg src={bg} alt={"Background"}/>
        </HeaderContainer>
    </>
  );
}

export default App;

import {useState} from "react";
import './assets/style/style.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import LastAdded from "./components/LastAdded/LastAdded";
import Footer from "./components/Footer/Footer";
import Popular from "./components/Popular/Popular";

const App = () => {
    const [serverLink, setServerLink] = useState("http://10.80.0.168:8080");
  return (
    <>
        <Navbar/>
        <Header serverLink={serverLink}/>
        <Popular serverLink={serverLink}/>
        <LastAdded serverLink={serverLink}/>
        <Footer/>
    </>
  );
}

export default App;

import './assets/style/style.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import LastAdded from "./components/LastAdded/LastAdded";
import Footer from "./components/Footer/Footer";
import Popular from "./components/Popular/Popular";

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Popular/>
        <LastAdded/>
        <Footer/>
    </>
  );
}

export default App;

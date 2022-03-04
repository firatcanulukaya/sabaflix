import './assets/style/style.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import LastAdded from "./components/LastAdded/LastAdded";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <LastAdded/>
        <Footer/>
    </>
  );
}

export default App;

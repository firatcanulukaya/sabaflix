import './assets/style/style.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage";
import ListAll from "./components/ListAll/ListAll";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    const serverLink = "http://10.80.0.168:8080";
    return (
        <>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage serverLink={serverLink}/>}/>
                    <Route path="/all" element={<ListAll serverLink={serverLink}/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;

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
    return (
        <>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/all" element={<ListAll/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;

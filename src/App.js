import './assets/style/style.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage";
import ListAll from "./components/ListAll/ListAll";
import NotFound from "./components/404/NotFound";
import SearchResult from "./components/SearchResult/SearchResult";

import {
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/all" element={<ListAll/>}/>
                <Route path="/search/:search" element={<SearchResult/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

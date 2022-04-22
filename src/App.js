import './assets/style/style.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage";
import ListAll from "./components/ListAll/ListAll";
import NotFound from "./components/404/NotFound";
import SearchResult from "./components/SearchResult/SearchResult";
import Modal from "./components/Modal/Modal";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";

import {
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <>
            <Modal/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/all" element={<ListAll/>}/>
                <Route path="/search/:search" element={<SearchResult/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/series" element={<Series/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

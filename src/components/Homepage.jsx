import LastAdded from "./LastAdded/LastAdded";
import Popular from "./Popular/Popular";
import Header from "./Header/Header";

const Homepage = () => {
    return(
         <>
             <Header/>
             <Popular/>
             <LastAdded/>
         </>
    )
}

export default Homepage
import LastAdded from "./LastAdded/LastAdded";
import Popular from "./Popular/Popular";
import Header from "./Header/Header";

const Homepage = ({serverLink}) => {
    return(
         <>
             <Header serverLink={serverLink}/>
             <Popular serverLink={serverLink}/>
             <LastAdded serverLink={serverLink}/>
         </>
    )
}

export default Homepage
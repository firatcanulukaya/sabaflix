import {HeaderBg, HeaderContainer} from "./style";
import bg from "../../assets/img/bg.png";

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderBg src={bg} alt={"Background"}/>
        </HeaderContainer>
    )
}

export default Header;
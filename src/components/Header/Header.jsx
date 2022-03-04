import {
    HeaderBtn, HeaderBtnIcon,
    HeaderButtonContainer,
    HeaderContainer,
    HeaderContent,
    HeaderContentContainer,
    HeaderContentImg, HeaderDesc
} from "./style";
import bg from "../../assets/img/bg2.jpg";
import contentLogo from "../../assets/img/lcdpLogo.png"
import sabaflixOriginal from "../../assets/img/original.svg"
import sabaflixSeries from "../../assets/img/series.svg"
import {SabaflixLogo} from "../../assets/style/styled";
import shoppingBag from "../../assets/img/shoppingBag.svg";
import infoIcon from "../../assets/img/info.svg"

const Header = () => {
    return (
        <HeaderContainer bg={bg}>
            <HeaderContentContainer>
                <HeaderContent>
                    <SabaflixLogo src={sabaflixSeries}/>
                    <HeaderContentImg src={contentLogo} alt={"Logo"}/>
                </HeaderContent>
                <HeaderDesc>
                    Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind
                    manipulates the police to carry out his plan.
                </HeaderDesc>

                <HeaderButtonContainer>
                    <HeaderBtn> <HeaderBtnIcon src={shoppingBag}/> Buy</HeaderBtn>
                    <HeaderBtn opacity={true}><HeaderBtnIcon src={infoIcon}/>More Info</HeaderBtn>
                </HeaderButtonContainer>
            </HeaderContentContainer>
        </HeaderContainer>
    )
}

export default Header;
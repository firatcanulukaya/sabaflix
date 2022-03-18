import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {
    HeaderBtn, HeaderBtnIcon,
    HeaderButtonContainer,
    HeaderContainer,
    HeaderContent,
    HeaderContentContainer,
    HeaderContentImg, HeaderDesc
} from "./style";
import sabaflixOriginal from "../../assets/img/original.svg"
import sabaflixSeries from "../../assets/img/series.svg"
import {SabaflixLogo} from "../../assets/style/styled";
import shoppingBag from "../../assets/img/shoppingBag.svg";
import infoIcon from "../../assets/img/info.svg"

const Header = () => {
    const [content, setContent] = useState([]);
    const {serverLink} = useSelector(state => state.util);

    useEffect(() => {
        axios.get(`${serverLink}/content/most-popular`)
            .then(res => {
                setContent(res.data.message);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <HeaderContainer bg={content.background}>
            <HeaderContentContainer>
                <HeaderContent>
                    <SabaflixLogo src={content.isSeries ? sabaflixSeries : sabaflixOriginal}/>
                    <HeaderContentImg src={content.titleLogo} alt={"Logo"}/>
                </HeaderContent>
                <HeaderDesc>
                    {content.description}
                </HeaderDesc>

                <HeaderButtonContainer>
                    <HeaderBtn> <HeaderBtnIcon src={shoppingBag}/> Buy</HeaderBtn>
                    <HeaderBtn isOpacity={true}><HeaderBtnIcon src={infoIcon}/>More Info</HeaderBtn>
                </HeaderButtonContainer>
            </HeaderContentContainer>
        </HeaderContainer>
    )
}

export default Header;
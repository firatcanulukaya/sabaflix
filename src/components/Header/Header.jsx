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
import {Loading, SabaflixLogo} from "../../assets/style/styled";
import shoppingBag from "../../assets/img/shoppingBag.svg";
import infoIcon from "../../assets/img/info.svg"
import {getHeader} from "../../redux/actions/header";

const Header = () => {
    const dispatch = useDispatch();
    const {serverLink} = useSelector(state => state.util);
    const {content} = useSelector(state => state.header);

    // useEffect(() => {
    //     dispatch(getHeader());
    // }, []);

    if(content === null || undefined || 'Failed to fetch') return <Loading>Loading...</Loading>
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
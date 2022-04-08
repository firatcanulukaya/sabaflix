import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    HeaderBtn, HeaderBtnIcon,
    HeaderButtonContainer,
    HeaderContainer,
    HeaderContent,
    HeaderContentContainer,
    HeaderContentImg, HeaderDesc, HeaderRank, HeaderRankInfo, HeaderRankItems, HeaderRankScore
} from "./style";
import sabaflixOriginal from "../../assets/img/original.svg"
import sabaflixSeries from "../../assets/img/series.svg"
import {Loading, SabaflixLogo} from "../../assets/style/styled";
import shoppingBag from "../../assets/img/shoppingBag.svg";
import infoIcon from "../../assets/img/info.svg"
import {getHeader} from "../../redux/actions/header";

const Header = () => {
    const dispatch = useDispatch();
    const {content} = useSelector(state => state.header);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getHeader());
        };
        fetchData()
    }, [dispatch]);
    let starRank;

    if (content?.rank >= 0 && content?.rank <= 20) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star-half-stroke"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
        </HeaderRank>
    } else if (content?.rank >= 21 && content?.rank <= 40) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star-half-stroke"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
        </HeaderRank>
    } else if (content?.rank >= 41 && content?.rank <= 60) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star-half-stroke"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
        </HeaderRank>
    } else if (content?.rank >= 61 && content?.rank <= 80) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star-half-stroke"/>
            <HeaderRankItems className="fa-regular fa-star"/>
        </HeaderRank>
    } else if (content?.rank >= 81 && content?.rank <= 100) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
        </HeaderRank>
    }


    if (content === null || undefined) return <Loading>Loading...</Loading>
    return (
        <HeaderContainer bg={content.background}>
            <HeaderContentContainer>
                <HeaderContent>
                    <SabaflixLogo src={content.isSeries ? sabaflixSeries : sabaflixOriginal}/>
                    <HeaderContentImg src={content.titleLogo} alt={"Logo"}/>
                </HeaderContent>

                <HeaderRankInfo>
                    {starRank}
                    <HeaderRankScore>{content.rank}</HeaderRankScore>
                </HeaderRankInfo>

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
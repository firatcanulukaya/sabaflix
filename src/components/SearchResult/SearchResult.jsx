import {useSelector} from "react-redux";
import {Container, Loading, Row} from "../../assets/style/styled";
import {
    SearchContainer,
    SearchContent,
    SearchContentContainer,
    SearchImg,
    SearchInfoLogo, SearchInfoPrice,
    SearchInformation
} from "./style";
import sabaflixOriginal from "../../assets/img/original.svg";
import sabaflixSeries from "../../assets/img/series.svg";

const SearchResult = () => {
    const {search} = useSelector(state => state.search);

    if (search === null) return <Loading>Loading...</Loading>
    return (
        <SearchContainer>
            <Container>
                <Row>
                    {
                        search.length > 0 ?
                            search.map((item, index) => (
                                <SearchContent key={index} id={"anan"}>
                                    <SearchContentContainer>
                                        <SearchImg src={item.banner} alt={item.title}/>
                                        <SearchInformation>
                                            <SearchInfoPrice>{item.price} ₺</SearchInfoPrice>
                                            <SearchInfoLogo
                                                src={item.isSeries ? sabaflixOriginal : sabaflixSeries}/>
                                        </SearchInformation>
                                    </SearchContentContainer>
                                </SearchContent>
                            ))
                            :
                            <Loading>Nothing to show.</Loading>
                    }
                </Row>
            </Container>
        </SearchContainer>
    )
}

export default SearchResult;
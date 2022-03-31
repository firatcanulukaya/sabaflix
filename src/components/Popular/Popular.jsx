import {
    PopularContainer,
    PopularHeader,
    PopularOverflow,
    SliderBtn,
    SliderBtnIcon
} from "./style";
import {Container, Row} from "../../assets/style/styled";
import arrowRight from "../../assets/img/ArrowRight.svg";
import arrowLeft from "../../assets/img/ArrowLeft.svg";
import PopularItem from "./PopularItem";

const Popular = () => {

    const scrollLeft = () => {
        const slider = document.getElementById('wrapper');
        console.log(slider.scrollLeft -= slider.offsetWidth);
        slider.scrollLeft -= slider.offsetWidth;
    };

    const scrollRight = () => {
        const slider = document.getElementById('wrapper');
        console.log(slider.scrollLeft += slider.offsetWidth);
        slider.scrollLeft += slider.offsetWidth;
    };

    return (

        <PopularContainer>
            <Container>
                <Row>
                    <PopularHeader>Popular on Sabaflix</PopularHeader>
                </Row>
                <Row>
                    <SliderBtn className="left" onClick={() => scrollLeft()}>
                        <SliderBtnIcon src={arrowLeft} alt="Arrow" id={"left"}/>
                    </SliderBtn>

                    <SliderBtn className="right" onClick={() => scrollRight()}>
                        <SliderBtnIcon src={arrowRight} alt="Arrow" id={"right"}/>
                    </SliderBtn>

                    <PopularOverflow id={"wrapper"}>
                        <PopularItem/>
                    </PopularOverflow>
                </Row>
            </Container>
        </PopularContainer>
    )
}

export default Popular;
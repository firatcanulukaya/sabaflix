import {useState} from 'react';
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
    const wrap = document.getElementById('wrapper')
    const [scroll, setScroll] = useState([{perClick: 0, amount: 0}]);

    const scrollRight = () => {
        console.log("sad")
        wrap.scrollTo({
            top: 0,
            left: 500,
            behavior: "smooth"
        })
        if (scroll.amount < 0) {
            setScroll([{...scroll, amount: 0}])
        }
    }

    const scrollLeft = () => {
        if (scroll.amount <= wrap.scrollWidth - wrap.clientWidth) {
            wrap.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }

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
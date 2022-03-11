import {useEffect, useState} from 'react';
import axios from "axios";
import {
    PopularContainer,
    PopularContent,
    PopularContentContainer,
    PopularHeader,
    PopularImg,
    PopularOverflow,
    SliderBtn,
    SliderBtnContainer,
    SliderBtnIcon
} from "./style";
import {Container, Row} from "../../assets/style/styled";
import arrowRight from "../../assets/img/ArrowRight.svg";
import arrowLeft from "../../assets/img/ArrowLeft.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const Popular = ({serverLink}) => {
    const [mostPopular, setMostPopular] = useState([]);
    useEffect(() => {
        axios.get(`${serverLink}/content/popular`)
            .then(res => {
                setMostPopular(res.data.message);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const wrap = document.getElementById('wrapper')
    const [scroll, setScroll] = useState([{perClick: 0, amount: 0}]);

    const scrollLeft = () => {
        console.log("sad")
        wrap.scrollTo({
            top: 0,
            left: (scroll.amount -= scroll.perClick),
            behavior: "smooth"
        })
        if (scroll.amount < 0) {
            setScroll([{...scroll, amount: 0}])
        }
    }

    const scrollRight = () => {
        if (scroll.amount <= wrap.scrollWidth - wrap.clientWidth) {
            wrap.scrollTo({
                top: 0,
                left: (scroll.amount += scroll.perClick),
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
                    <SliderBtn className="left" onClick={() => scrollRight()}>
                        <SliderBtnIcon src={arrowLeft} alt="Arrow" id={"left"}/>
                    </SliderBtn>

                    <SliderBtn className="right" onClick={() => scrollLeft()}>
                        <SliderBtnIcon src={arrowRight} alt="Arrow" id={"right"}/>
                    </SliderBtn>

                    <PopularOverflow id={"wrapper"}>
                        {
                            mostPopular.length > 0 ?
                                mostPopular.map((item, index) => {
                                    return (
                                        <PopularContent key={index} id="content">
                                            <PopularContentContainer indexID={index}>
                                                <PopularImg src={item.banner} alt={item.title}/>
                                            </PopularContentContainer>
                                        </PopularContent>
                                    )
                                })
                                :
                                <PopularContent>
                                    <PopularHeader>Nothing to show.</PopularHeader>
                                </PopularContent>
                        }
                    </PopularOverflow>
                </Row>
            </Container>
        </PopularContainer>
    )
}

export default Popular;
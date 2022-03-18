import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getPopular} from "../../redux/actions/popular";
import {
    PopularContainer,
    PopularContent,
    PopularContentContainer,
    PopularHeader,
    PopularImg,
    PopularOverflow,
    SliderBtn,
    SliderBtnIcon
} from "./style";
import {Container, Row} from "../../assets/style/styled";
import arrowRight from "../../assets/img/ArrowRight.svg";
import arrowLeft from "../../assets/img/ArrowLeft.svg";

const Popular = () => {
    const {serverLink} = useSelector(state => state.util);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchData = async () => {
    //          await dispatch(getPopular())
    //     };
    //     fetchData();
    // }, []);
    const {content} = useSelector(state => state.popular);

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
                        {
                            content.length > 0 ?
                                content.map((item, index) => {
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
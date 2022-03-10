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
    SliderBtnIcon,
    SliderBtnLeft,
    SliderBtnRight
} from "./style";
import {Container, Row} from "../../assets/style/styled";
import arrowRight from "../../assets/img/ArrowRight.svg";
import arrowLeft from "../../assets/img/ArrowLeft.svg";

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

    let movePer = 0;
    let maxPer = 0;

    const handleClick = (e) => {
        const sliderContent = document.querySelectorAll("#content");
        const slideWidth = document.querySelector("#content");
        const wrapperWidth = document.querySelector("#wrapper");
        let totalCarousel = sliderContent.length;
        movePer = movePer + slideWidth.clientWidth;
        maxPer = (totalCarousel - wrapperWidth.clientWidth / slideWidth.clientWidth) * slideWidth.clientWidth;

        if (e.target.id === "right") {
            if (movePer > maxPer) {
                movePer = 0;
                console.log("calis")
                sliderContent.forEach(slider => {
                    slider.style.transform = "translateX(-" + movePer + "px)";
                });

            } else {
                console.log("calistim")
                sliderContent.forEach(slider => {
                    slider.style.transform = "translateX(-" + movePer + "px)";
                });
            }

        } else if (e.target.id === "left") {
            if (movePer < 0) {
                movePer = 0;
            } else {
                sliderContent.forEach(slider => {
                    slider.style.transform = "translateX(-" + movePer + "px)";
                });
            }
        }
    };

    return (

        <PopularContainer>
            <Container>
                <Row>
                    <PopularHeader>Popular on Sabaflix</PopularHeader>
                </Row>

                <Row>
                    <PopularOverflow id={"wrapper"}>

                        <SliderBtnContainer>
                            <SliderBtn className="left" onClick={e => handleClick(e)}>
                                <SliderBtnIcon src={arrowLeft} alt="Arrow" id={"left"}/>
                            </SliderBtn>

                            <SliderBtn className="right" onClick={e => handleClick(e)}>
                                <SliderBtnIcon src={arrowRight} alt="Arrow" id={"right"}/>
                            </SliderBtn>
                        </SliderBtnContainer>
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
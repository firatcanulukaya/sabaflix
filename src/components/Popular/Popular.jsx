import { useEffect, useState } from 'react';
import axios from "axios";
import {PopularContainer, PopularContent, PopularContentContainer, PopularHeader, PopularImg, PopularOverflow} from "./style";
import {Container, Row} from "../../assets/style/styled";

const Popular = () => {
    const [serverLink, setServerLink] = useState("http://7d12-212-175-35-8.ngrok.io");
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


    return(

        <PopularContainer>
            <Container>
                <Row>
                    <PopularHeader>Popular on Sabaflix</PopularHeader>
                </Row>

                <Row>
                    <PopularOverflow>
                    {
                        mostPopular.length > 0 ?
                            mostPopular.slice(0, 10).map((item, index) => {
                                return (
                                    <PopularContent key={index}>
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
import {useEffect, useState} from "react";
import axios from "axios";
import {LastContainer, LastContent, LastHeader, LastImg} from "./style";
import {Container, Row} from "../../assets/style/styled";
import rick from "../../assets/img/rick.png";

const LastAdded = () => {
    const [serverLink, setServerLink] = useState("http://1ff9-212-175-35-8.ngrok.io");
    const [lastAdded, setLastAdded] = useState([]);

    useEffect(() => {
        axios.get(`${serverLink}/content/last-added`)
            .then(res => {
                setLastAdded(res.data.message);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    console.log(lastAdded)


    return (
        <LastContainer>
            <Container>
                <Row>
                    <LastHeader>Last Added</LastHeader>
                </Row>

                <Row>

                    {
                        lastAdded.length > 0 ?
                            lastAdded.map((item, index) => {
                                return (
                                    <LastContent key={index}>
                                        <LastImg src={item.banner} alt={item.title}/>
                                    </LastContent>
                                )
                            })
                            :
                            <LastContent>
                                <LastHeader>Nothing to show.</LastHeader>
                            </LastContent>
                    }

                </Row>
            </Container>
        </LastContainer>
    )
}

export default LastAdded;
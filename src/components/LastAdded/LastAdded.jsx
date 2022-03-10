import {useEffect, useState} from "react";
import axios from "axios";
import {LastContainer, LastContent, LastContentContainer, LastHeader, LastImg} from "./style";
import {Container, Row} from "../../assets/style/styled";

const LastAdded = () => {
    const [serverLink, setServerLink] = useState("http://7d12-212-175-35-8.ngrok.io");
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
                                        <LastContentContainer>
                                            <LastImg src={item.banner} alt={item.title}/>
                                        </LastContentContainer>
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
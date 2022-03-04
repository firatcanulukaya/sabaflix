import {LastContainer, LastContent, LastHeader, LastImg} from "./style";
import {Container, Row} from "../../assets/style/styled";
import rick from "../../assets/img/rick.png";

const LastAdded = () => {
    return (
        <LastContainer>
            <Container>
                <Row>
                    <LastHeader>Last Added</LastHeader>
                </Row>

                <Row>
                    <LastContent>
                        <LastImg src={rick}/>
                    </LastContent>

                    <LastContent>
                        <LastImg src={rick}/>
                    </LastContent>

                    <LastContent>
                        <LastImg src={rick}/>
                    </LastContent>

                    <LastContent>
                        <LastImg src={rick}/>
                    </LastContent>

                    <LastContent>
                        <LastImg src={rick}/>
                    </LastContent>
                </Row>
            </Container>
        </LastContainer>
    )
}

export default LastAdded;
import {LastContainer, LastHeader} from "./style";
import {Container, Row} from "../../assets/style/styled";
import LastAddedItem from "./LastAddedItem";

const LastAdded = () => {
    return (
        <LastContainer>
            <Container>
                <Row>
                    <LastHeader>Last Added</LastHeader>
                </Row>

                <Row>
                    <LastAddedItem/>
                </Row>
            </Container>
        </LastContainer>
    )
}

export default LastAdded;
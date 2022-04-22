import {LastContainer, LastHeader} from "./style";
import {Container, Row} from "../../assets/style/styled";
import SeriesItem from "./SeriesItem";

const Series = () => {
    return (
        <LastContainer style={{marginTop: "6rem"}}>
            <Container>
                <Row>
                    <LastHeader>Series</LastHeader>
                </Row>

                <Row>
                    <SeriesItem/>
                </Row>
            </Container>
        </LastContainer>
    )
}

export default Series;
import {LastContainer, LastHeader} from "./style";
import {Container, Row} from "../../assets/style/styled";
import MoviesItem from "./MoviesItem";

const Movies = () => {
    return (
        <LastContainer style={{marginTop: "6rem"}}>
            <Container>
                <Row>
                    <LastHeader>Movies</LastHeader>
                </Row>

                <Row>
                    <MoviesItem/>
                </Row>
            </Container>
        </LastContainer>
    )
}

export default Movies;
import Categories from "./Categories/Categories";
import List from "./List/List";
import {AllContainer, ColForty, ColSixty} from "./style";
import {Container, Row} from "../../assets/style/styled";

const ListAll = () => {
    return (
        <AllContainer>
            <Container>
                <Row>
                    <ColForty>
                        <Categories/>
                    </ColForty>

                    <ColSixty>
                        <List />
                    </ColSixty>
                </Row>
            </Container>
        </AllContainer>
    )
}

export default ListAll;
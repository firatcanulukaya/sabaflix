import Categories from "./Categories/Categories";
import List from "./List/List";
import {AllContainer, ColForty, ColSixty} from "./style";
import {Container, Row} from "../../assets/style/styled";

const ListAll = ({serverLink}) => {
    return (
        <AllContainer>
            <Container>
                <Row>
                    <ColForty>
                        <Categories/>
                    </ColForty>

                    <ColSixty>
                        <List serverLink={serverLink}/>
                    </ColSixty>
                </Row>
            </Container>
        </AllContainer>
    )
}

export default ListAll;
import {ListContainer, ListContent, ListContentContainer, ListHeader, ListImg} from "./style";
import {Container, Row} from "../../../assets/style/styled";
import {useEffect, useState} from "react";
import axios from "axios";

const List = ({serverLink}) => {
    const [listAll, setListAll] = useState([]);

    useEffect(() => {
        axios.get(`${serverLink}/content/`)
            .then(res => {
                setListAll(res.data.message);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return(
        <ListContainer>
            <Container>
                <Row>
                    <ListHeader>Showing all contents</ListHeader>
                </Row>
                <Row>
                    {
                        listAll.length > 0 ?
                            listAll.map((item, index) => {
                                return (
                                    <ListContent key={index}>
                                        <ListContentContainer>
                                            <ListImg src={item.banner} alt={item.title}/>
                                        </ListContentContainer>
                                    </ListContent>
                                )
                            })
                            :
                            <ListContent>
                                <ListHeader>Nothing to show.</ListHeader>
                            </ListContent>
                    }
                </Row>
            </Container>
        </ListContainer>
    )
}

export default List;
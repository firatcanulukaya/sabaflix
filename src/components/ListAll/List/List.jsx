import {ListContainer, ListContent, ListContentContainer, ListHeader, ListImg} from "./style";
import {Container, Row} from "../../../assets/style/styled";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllContent} from "../../../redux/actions/contentAll";

const List = () => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await dispatch(getAllContent());
    //     };
    //     fetchData();
    // }, []);
    const {content} = useSelector(state => state.contentAll);

    return (
        <ListContainer>
            <Container>
                <Row>
                    <ListHeader>Showing all contents</ListHeader>
                </Row>
                <Row>
                    {
                        content.length > 0 ?
                            content.map((item, index) => {
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
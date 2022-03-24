import {ListContainer, ListContent, ListContentContainer, ListHeader, ListImg} from "./style";
import {Container, Loading, Row} from "../../../assets/style/styled";
import {useDispatch, useSelector} from "react-redux";
import {getAllContent} from "../../../redux/actions/contentAll";
import {useEffect} from "react";

const List = () => {
    const dispatch = useDispatch();
    const {content} = useSelector(state => state.contentAll);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllContent());
        };
        fetchData()
    }, [dispatch]);

    if(content === null || undefined) return <Loading>Loading...</Loading>
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
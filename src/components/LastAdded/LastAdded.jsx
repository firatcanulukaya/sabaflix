import {useEffect} from "react";
import {LastContainer, LastContent, LastContentContainer, LastHeader, LastImg} from "./style";
import {Container, Row} from "../../assets/style/styled";
import {useSelector, useDispatch} from "react-redux";
import {getLastAdded} from "../../redux/actions/lastAdded";

const LastAdded = () => {
    const {serverLink} = useSelector(state => state.util);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await dispatch(getLastAdded());
    //     };
    //     fetchData();
    // }, []);
    const { content } = useSelector(state => state.lastAdded);
    console.log(content)

    return (
        <LastContainer>
            <Container>
                <Row>
                    <LastHeader>Last Added</LastHeader>
                </Row>

                <Row>

                    {
                        content.length > 0 ?
                            content.map((item, index) => {
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
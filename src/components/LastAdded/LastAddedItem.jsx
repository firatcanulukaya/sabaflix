import {LastContent, LastContentContainer, LastHeader, LastImg} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../../assets/style/styled";

const LastAddedItem = () => {
    const dispatch = useDispatch();
    const { content } = useSelector(state => state.lastAdded);
    // dispatch(getLastAdded());

    if(content === null || undefined || 'Failed to fetch') return <Loading>Loading...</Loading>
    return(
        <>
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
        </>
    )
}

export default LastAddedItem;
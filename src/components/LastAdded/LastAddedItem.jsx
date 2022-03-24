import {LastContent, LastContentContainer, LastHeader, LastImg} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../../assets/style/styled";
import {useEffect} from "react";
import {getLastAdded} from "../../redux/actions/lastAdded";

const LastAddedItem = () => {
    const dispatch = useDispatch();
    const {content} = useSelector(state => state.lastAdded);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getLastAdded());
        };
        fetchData()
    }, [dispatch]);

    if (content === null || undefined) return <Loading>Loading...</Loading>
    return (
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
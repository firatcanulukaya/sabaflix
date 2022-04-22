import {LastContent, LastContentContainer, LastHeader, LastImg} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {Loading} from "../../assets/style/styled";
import {useEffect} from "react";
import {getModal} from "../../redux/actions/modal";
import {getAllContent} from "../../redux/actions/contentAll";

const MoviesItem = () => {
    const dispatch = useDispatch();
    const {content} = useSelector(state => state.contentAll);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllContent());
        };
        fetchData()
    }, [dispatch]);

    if (content === null || undefined) return <Loading>Loading...</Loading>
    return (
        <>
            {
                content.length > 0 ?
                    content.filter(con => con.isOriginal).map((item, index) => {
                        return (
                            <LastContent key={index} onClick={() => dispatch(getModal(item.id))}>
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

export default MoviesItem;
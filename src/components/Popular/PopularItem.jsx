import {PopularContent, PopularContentContainer, PopularHeader, PopularImg} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPopular} from "../../redux/actions/popular";
import {Loading} from "../../assets/style/styled";

const PopularItem = () => {
    const dispatch = useDispatch();
    const {content} = useSelector(state => state.popular);

    // useEffect(() => {
    //     dispatch(getPopular())
    // }, [dispatch]);

    if(content === null || undefined || 'Failed to fetch') return <Loading>Loading...</Loading>
    return(
        <>
            {
                content.length > 0 ?
                    content.map((item, index) => {
                        return (
                            <PopularContent key={index} id="content">
                                <PopularContentContainer indexID={index}>
                                    <PopularImg src={item.banner} alt={item.title}/>
                                </PopularContentContainer>
                            </PopularContent>
                        )
                    })
                    :
                    <PopularContent>
                        <PopularHeader>Nothing to show.</PopularHeader>
                    </PopularContent>
            }
        </>
    )
}

export default PopularItem;
import {
    ListContainer,
    ListContent,
    ListContentContainer,
    ListHeader,
    ListImg,
    ListInfoLogo, ListInfoPrice,
    ListInformation
} from "./style";
import {Container, Loading, Row} from "../../../assets/style/styled";
import {useDispatch, useSelector} from "react-redux";
import {getAllContent} from "../../../redux/actions/contentAll";
import {useEffect} from "react";
import sabaflixOriginal from "../../../assets/img/original.svg"
import sabaflixSeries from "../../../assets/img/series.svg"

const List = () => {
    const dispatch = useDispatch();
    const {content} = useSelector(state => state.contentAll);
    const {filter, categories} = useSelector(state => state.filter);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllContent());
        };
        fetchData()
    }, [dispatch]);

    const handleCategories = () => {
        const category = document.getElementById('CategoriesContainer')
        const body = document.body;

        category.classList.toggle('active')

        if (category.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }

    if (content === null || undefined) return <Loading>Loading...</Loading>
    return (
        <ListContainer>
            <Container>
                <Row>
                    <ListHeader>
                        {filter ? `Showing ${categories.find(cat => cat.id === filter).slug} contents` : 'Showing all contents'}
                        <br/>
                        <p onClick={() => handleCategories()}>Show Categories</p>
                    </ListHeader>
                </Row>
                <Row id="list">
                    {
                        content.length > 0 ?
                            filter === null ?
                                content.map((item, index) => {
                                    return (
                                        <ListContent key={index}>
                                            <ListContentContainer>
                                                <ListImg src={item.banner} alt={item.title}/>
                                                <ListInformation>
                                                    <ListInfoPrice>{item.price} ₺</ListInfoPrice>
                                                    <ListInfoLogo
                                                        src={item.isSeries ? sabaflixOriginal : sabaflixSeries}/>
                                                </ListInformation>
                                            </ListContentContainer>
                                        </ListContent>
                                    )
                                })
                                : content.filter(cat => cat.categoryId === filter).length > 0 ?
                                    content.filter(cat => cat.categoryId === filter).map((item, index) => {
                                        return (
                                            <ListContent key={index}>
                                                <ListContentContainer>
                                                    <ListImg src={item.banner} alt={item.title}/>
                                                    <ListInformation>
                                                        <ListInfoPrice>{item.price} ₺</ListInfoPrice>
                                                        <ListInfoLogo
                                                            src={item.isSeries ? sabaflixOriginal : sabaflixSeries}/>
                                                    </ListInformation>
                                                </ListContentContainer>
                                            </ListContent>
                                        )
                                    })
                                    : <Loading>No content found</Loading>
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
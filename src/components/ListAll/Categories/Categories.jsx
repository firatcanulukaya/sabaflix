import {useEffect, useState} from "react";
import {
    CancelIcon,
    CategoriesContainer,
    CategoriesList,
    CategoryArrow, CategoryButton,
    CategoryHeader,
    CategoryItems,
    CategoryLi,
    CategoryUl,
    CatSticky, CatStickySubTitle,
    CatStickyTitle
} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, setFilter} from "../../../redux/actions/filter";
import {handleCategories} from "../../../util/utilFunctions";
import {Loading} from "../../../assets/style/styled";
import arrow from "../../../assets/img/ArrowDown.svg"
import cancel from "../../../assets/img/Cancel.svg"

const Categories = () => {
    const dispatch = useDispatch();
    const {categories, filter} = useSelector(state => state.filter);
    const [categoryHeight, setCategoryHeight] = useState(0);

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch]);

    useEffect(() => {
        setTimeout(() => {
            setCategoryHeight(document.getElementById("list").clientHeight / 2 + 500);
        }, 200)
    }, []);

    const handleChangeCategory = (cat) => {
        dispatch(setFilter(parseInt(cat)));
    };

    useEffect(() => {
        const category = document.getElementById('CategoriesContainer')
        const body = document.body;
        if (filter !== null) {
            category.classList.remove('active')
            body.style.overflow = 'auto';
        }

    }, [filter]);

    if (categories === null) return <Loading>Loading...</Loading>
    return (
        <CategoriesContainer height={categoryHeight} id="CategoriesContainer">
            <CancelIcon src={cancel} alt="cancel" onClick={() => handleCategories()}/>
            <CatSticky>
                <CategoriesList>
                    <CategoryHeader>
                        <CatStickyTitle>
                            Categories
                        </CatStickyTitle>
                        <CategoryArrow src={arrow}/>
                    </CategoryHeader>
                    <CategoryUl>
                        {
                            categories.length > 0 ? categories.map((cat, index) => {
                                return (
                                    <CategoryLi key={index}
                                                onClick={e => handleChangeCategory(e.target.getAttribute("id"))}>
                                        <CategoryItems id={cat.id} className={`${cat.id === filter ? 'active' : ''}`}>
                                            {cat.title}
                                        </CategoryItems>
                                    </CategoryLi>
                                )
                            }) : <CatStickySubTitle>There is no any category</CatStickySubTitle>
                        }
                    </CategoryUl>
                    {filter === null ? '' :
                        <CategoryButton onClick={() => dispatch({type: "REMOVE_FILTER"})}>Clear Filter</CategoryButton>}
                </CategoriesList>
            </CatSticky>
        </CategoriesContainer>
    )
}

export default Categories;
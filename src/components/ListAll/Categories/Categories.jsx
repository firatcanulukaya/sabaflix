import {useEffect, useState} from "react";
import {
    CategoriesContainer,
    CategoriesList,
    CategoryArrow,
    CategoryHeader,
    CategoryItems,
    CategoryLi,
    CategoryUl,
    CatSticky, CatStickySubTitle,
    CatStickyTitle
} from "./style";
import arrow from "../../../assets/img/ArrowDown.svg"
import {useDispatch, useSelector} from "react-redux";
import {getCategories, setFilter} from "../../../redux/actions/filter";
import {Loading} from "../../../assets/style/styled";

const Categories = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.filter);
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

    if (categories === null) return <Loading>Loading...</Loading>

    return (
        <CategoriesContainer height={categoryHeight}>
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
                                        <CategoryItems id={cat.id}>
                                            {cat.title}
                                        </CategoryItems>
                                    </CategoryLi>
                                )
                            }) : <CatStickySubTitle>There is no any category</CatStickySubTitle>
                        }
                    </CategoryUl>
                    <button onClick={() => dispatch({type: "REMOVE_FILTER"})}>clear filter</button>
                </CategoriesList>
            </CatSticky>
        </CategoriesContainer>
    )
}

export default Categories;
import {useState, useEffect} from "react";
import axios from "axios";
import {
    CategoriesContainer,
    CategoriesList, CategoryArrow,
    CategoryHeader, CategoryItems, CategoryLi, CategoryUl,
    CatSticky,
    CatStickySubTitle,
    CatStickyTitle
} from "./style";
import arrow from "../../../assets/img/ArrowDown.svg"
import {Loading} from "../../../assets/style/styled";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("http://10.80.0.168:8080/contentCategory")
            .then(res => {
                if (res.status === 200) {
                    setCategories(res.data.message);
                }
            })
    }, []);

    return (
        <CategoriesContainer>
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
                            categories.map((cat, index) => {
                                return(
                                    <CategoryLi key={index}>
                                        <CategoryItems>
                                            {cat.title}
                                        </CategoryItems>
                                    </CategoryLi>
                                )
                            })
                        }

                    </CategoryUl>


                </CategoriesList>


            </CatSticky>
        </CategoriesContainer>
    )
}

export default Categories;
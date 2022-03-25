import {useEffect, useState} from "react";
import axios from "axios";
import {
    CategoriesContainer,
    CategoriesList,
    CategoryArrow,
    CategoryHeader,
    CategoryItems,
    CategoryLi,
    CategoryUl,
    CatSticky,
    CatStickyTitle
} from "./style";
import arrow from "../../../assets/img/ArrowDown.svg"

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [categoryHeight, setCategoryHeight] = useState(0);
    useEffect(() => {
        axios.get("http://10.80.0.168:8080/contentCategory")
            .then(res => {
                if (res.status === 200) {
                    setCategories(res.data.message);
                }
            })
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setCategoryHeight(document.getElementById("list").clientHeight / 2 + 500);
        }, 200)
    }, []);

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
                            categories.map((cat, index) => {
                                return (
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
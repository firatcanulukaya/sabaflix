import {NavInput} from "./style";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getSearch} from "../../redux/actions/search";
import {useNavigate} from "react-router-dom";

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getSearch(searchValue))
        navigate(`/search?${searchValue}`)
    }, [dispatch, searchValue]);

    return (
        <>
            <NavInput type="text" placeholder="Search" onChange={e => setSearchValue(e.target.value)}/>
        </>
    )
}

export default SearchBox;
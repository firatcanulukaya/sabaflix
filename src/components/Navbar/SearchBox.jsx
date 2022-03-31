import {NavInput} from "./style";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getSearch} from "../../redux/actions/search";

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearch(searchValue))
    }, [dispatch, searchValue]);

    return (
        <>
            <NavInput type="text" placeholder="Search" onChange={e => setSearchValue(e.target.value)}/>
        </>
    )
}

export default SearchBox;
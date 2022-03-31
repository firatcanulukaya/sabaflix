import {NotFoundBack, NotFoundContainer} from "./style";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <NotFoundContainer>
            Not Found
            <NotFoundBack onClick={() => navigate("/")}>Homepage</NotFoundBack>
        </NotFoundContainer>
    )
}

export default NotFound;
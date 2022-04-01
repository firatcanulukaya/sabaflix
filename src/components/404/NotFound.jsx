import {NotFoundBack, NotFoundContainer} from "./style";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <NotFoundContainer>
            Not Found
            <NotFoundBack onClick={() => navigate(-1)}>Go Back</NotFoundBack>
        </NotFoundContainer>
    )
}

export default NotFound;
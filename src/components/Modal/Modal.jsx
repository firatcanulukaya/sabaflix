import {
    ModalCategories, ModalClose,
    ModalContent,
    ModalDesc,
    ModalImgTop,
    ModalInfo, ModalInnerContainer,
    ModalTitleLogo,
    ModalTop, ModalTopBg
} from "./style";
import {useSelector, useDispatch} from "react-redux";
import {HeaderRank, HeaderRankInfo, HeaderRankItems, HeaderRankScore} from "../Header/style";
import cancel from "../../assets/img/Cancel.svg";
import {useEffect} from "react";

const Modal = () => {
    const dispatch = useDispatch();
    const {content, open} = useSelector(state => state.modal);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open])

    let starRank;

    if (content?.rank >= 0 && content?.rank <= 20) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star-half-stroke"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
        </HeaderRank>
    } else if (content?.rank >= 21 && content?.rank <= 40) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star-half-stroke"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
        </HeaderRank>
    } else if (content?.rank >= 41 && content?.rank <= 60) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star-half-stroke"/>
            <HeaderRankItems className="fa-regular fa-star"/>
            <HeaderRankItems className="fa-regular fa-star"/>
        </HeaderRank>
    } else if (content?.rank >= 61 && content?.rank <= 80) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star-half-stroke"/>
            <HeaderRankItems className="fa-regular fa-star"/>
        </HeaderRank>
    } else if (content?.rank >= 81 && content?.rank <= 100) {
        starRank = <HeaderRank>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
            <HeaderRankItems className="fa-solid fa-star"/>
        </HeaderRank>
    }

    return (
        <ModalInnerContainer className={open && 'active'}>
            <ModalContent>
                <ModalClose src={cancel} alt="Cancel" onClick={() => dispatch({type: "CLOSE_MODAL"})}/>
                <ModalTop>
                    <ModalTopBg>
                        <ModalTitleLogo src={content?.titleLogo} allt="Title Logo"/>
                    </ModalTopBg>
                    <ModalImgTop src={content?.background} alt={"Banner"}/>
                </ModalTop>

                <ModalInfo>
                    <HeaderRankInfo>
                        {starRank}
                        <HeaderRankScore>{content?.rank}</HeaderRankScore>
                    </HeaderRankInfo>

                    <ModalDesc>
                        {content?.description}
                    </ModalDesc>

                    <ModalCategories>
                        {content?.contentCategory.title}
                    </ModalCategories>
                </ModalInfo>

            </ModalContent>
        </ModalInnerContainer>
    )
}

export default Modal;
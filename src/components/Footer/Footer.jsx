import {Footter, FootterLink, FootterText} from "./style";

const Footer = () => {
    return(
        <Footter>
            <FootterText>
                &copy; Sabaflix {new Date().getFullYear()}
            </FootterText>
            <FootterText>
                Made with <span role="img" aria-label="heart">❤️ & ☕</span> by <FootterLink href="https://sade.network" target="_blank">Fıratcan Ulukaya</FootterLink>
            </FootterText>
        </Footter>
    )
}

export default Footer;
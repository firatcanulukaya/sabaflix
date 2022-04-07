import {Footter, FootterLink, FootterText} from "./style";

const Footer = () => {
    return(
        <Footter>
            <FootterText>
                &copy; Sabaflix {new Date().getFullYear()}
            </FootterText>
            <FootterText>
                Made with <span role="img" aria-label="heart">❤️ & ☕</span> by <FootterLink href="https://frtcn.net" target="_blank">Fıratcan Ulukaya</FootterLink> & <FootterLink href="https://grexlin85.com" target="_blank">Erol Umut Atalay</FootterLink>
            </FootterText>
        </Footter>
    )
}

export default Footer;
import styled from "@emotion/styled";

import { link } from "../../lib/colors";
import logo from "./images/HPR_Black.png";

const StyledNav = styled.nav`
    width: 200px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    flex-grow: 1;
    overflow-y: auto;

    a:hover {
        color: ${link};
    }
`;

const Image = styled.img`
    display: block;
    width: 80px;
    width: 80px;
    padding-top: 1rem;
    margin: auto 1rem 1rem 1rem;
`;

console.log(logo);

const Nav = ({ children }) => {
    return (
        <StyledNav>
            {children}
            <Image src={logo.src} width="80" height="80" alt="" />
        </StyledNav>
    );
};

export default Nav;

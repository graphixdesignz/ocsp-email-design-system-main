import styled from "@emotion/styled";
import { primary, link } from "../../lib/colors";

const NavList = styled.ul`
    margin: 0.5rem;
    padding: 0;
    list-style: none;
`;

export const NavItem = styled.li`
    margin: 0;
    padding: 0;
    border-bottom: 1px solid ${primary};

    &:last-child {
        border-bottom: none;
    }
`;

export const NavLink = styled.a`
    font-size: 1rem;
    line-height: 1.5rem;
    display: block;

    text-decoration: none;

    &:hover {
        color: ${link};
    }
`;

export default NavList;

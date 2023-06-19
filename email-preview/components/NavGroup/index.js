import styled from "@emotion/styled";
import { primary } from "../../lib/colors";

const Container = styled.details`
    border-top: 1px solid ${primary};
    &[open] {
        border-bottom: 1px solid ${primary};
    }
    &:not(:first-of-type) {
        border-top: none;
    }
`;

const Content = styled.div`
    padding: 0.5rem;
`;

const Title = styled.summary`
    border-bottom: 1px solid ${primary};
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1.25rem;
    cursor: pointer;
    user-select: none;
    /* &::-webkit-details-marker,
    &::marker {
        display: none;
        content: "";
    } */
`;

const NavGroup = ({ title, children, open = false }) => {
    return (
        <Container open={open}>
            <Title>{title}</Title>
            <Content>{children}</Content>
        </Container>
    );
};

export default NavGroup;

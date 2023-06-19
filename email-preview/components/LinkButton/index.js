import Link from "next/link";
import styled from "@emotion/styled";
import { primary, inverse, grey } from "../../lib/colors";

const StyledLink = styled.a`
    display: block;
    max-width: 200px;
    margin: 1rem 1rem 1rem auto;
    padding: 0.25rem;
    background-color: ${primary};
    color: ${inverse};
    border: 1px solid ${grey};
    text-align: center;
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.5rem;
    cursor: pointer;

    &:hover {
        background-color: ${inverse};
        color: ${primary};
    }
`;

const LinkButton = ({ href, target, children, label, ...props }) => {
    if (target) {
        return (
            <StyledLink href={href} target={target}>
                {label || children}
            </StyledLink>
        );
    }
    return (
        <Link href={href} {...props}>
            <StyledLink>{label || children}</StyledLink>
        </Link>
    );
};

export default LinkButton;

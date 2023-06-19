import styled from "@emotion/styled";
import { link } from "../../lib/colors";

export const Title = styled.h1`
    font-size: 4rem;
    font-family: forma-djr-display, sans-serif;
    margin: 0;
    padding: 0;
`;

export const SubTitle = styled.h2`
    font-size: 3rem;
    font-family: forma-djr-display, sans-serif;
    margin: 2rem 0 0 0;
    padding: 0;
`;

export const Heading = styled.h2`
    font-size: 2rem;
    font-family: forma-djr-display, sans-serif;
    margin: 0;
    padding: 0;
`;

export const Quiet = styled.div`
    font-size: 1rem;
    padding: 2rem;
    text-align: center;

    > a {
        color: ${link};
    }
`;

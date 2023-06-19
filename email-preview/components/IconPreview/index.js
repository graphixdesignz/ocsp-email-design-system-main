import { useContext } from "react";
import _ from "lodash";
import PreviewContext from "../PreviewContext";
import styled from "@emotion/styled";

import icons from "./icons.js";

const Container = styled.div`
    /* width: 400px; */
    margin: 1rem auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const IconContainer = styled.div`
    display: block;
    width: 72px;
    height: 72px;
    margin: 1rem;
`;

const IconPreview = ({ use = "list", style = "color" }) => {
    const { colorFamily } = useContext(PreviewContext);
    const images = _.get(icons, `${colorFamily}.${style}.${use}`);
    if (!images) return null;
    const styleLabel =
        style === "color" ? "Solid Background" : "White Background";

    return (
        <>
            <h3>Icon with {styleLabel}</h3>
            <Container>
                {images.map(src => (
                    <IconContainer key={src}>
                        <img src={src} height="72" width="72" alt="" />
                    </IconContainer>
                ))}
            </Container>
        </>
    );
};

export default IconPreview;

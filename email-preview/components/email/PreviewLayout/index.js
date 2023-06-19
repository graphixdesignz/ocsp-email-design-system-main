import { useContext } from "react";
import styled from "@emotion/styled";

import ColorSelector, { ColorDefault } from "../../ColorSelect";
import PreviewContext from "../../PreviewContext";
import { Heading } from "../../Text";

import { greyLight, grey, colorWays } from "../../../lib/colors";

const PreviewContainer = styled.main`
    max-width: 1024px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: ${greyLight};
`;

const Toolbar = styled.div``;

const Tools = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Inline = styled.section`
    > h1:first-of-type {
        position: sticky;
        top: 0;
        z-index: 99;
        background-color: ${greyLight};
        padding: 1rem 0;
        font-size: 2rem;
    }
`;

const PreviewLayout = ({ inline = false, tools = false, children }) => {
    const { setColors } = useContext(PreviewContext);
    const { blue, lavender, green, purple, pink } = colorWays;
    if (inline) {
        return <Inline>{children}</Inline>;
    }
    return (
        <PreviewContainer>
            {tools && (
                <Toolbar>
                    <Heading>Colors:&nbsp;</Heading>
                    <Tools>
                        <ColorDefault
                            name="color"
                            title="White"
                            onClick={() => setColors([], "neutral")}
                            checked
                        />
                        <ColorSelector
                            name="color"
                            colorWay={blue}
                            title="Blue"
                            onClick={() => setColors(blue, "blue")}
                        />
                        <ColorSelector
                            name="color"
                            colorWay={lavender}
                            title="Lavender"
                            onClick={() => setColors(lavender, "lavender")}
                        />
                        <ColorSelector
                            name="color"
                            colorWay={green}
                            title="Green"
                            onClick={() => setColors(green, "green")}
                        />
                        <ColorSelector
                            name="color"
                            colorWay={purple}
                            title="Purple"
                            onClick={() => setColors(purple, "purple")}
                        />
                        <ColorSelector
                            name="color"
                            colorWay={pink}
                            title="Pink"
                            onClick={() => setColors(pink, "pink")}
                        />
                    </Tools>
                </Toolbar>
            )}

            {children}
        </PreviewContainer>
    );
};

export default PreviewLayout;

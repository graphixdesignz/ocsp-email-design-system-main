import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../../email/ModuleContainer";

import { template as headerTemplate } from "../../email/HeaderSignIn";
import { template as signifierTemplate } from "../../email/Signifier";
import { template as image } from "../../email/ResponsiveImage";
import { template as thirdsImageTemplate } from "../../email/ThirdsImage";
import { template as footerTemplate } from "../../email/Footer";
import { template as plainText } from "../../email/PlainText";

const AcquisitionWtbKsp = ({ dir = "ltr", colors = [] }) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    colors,
                }),
            )}
        </ModuleContainer>
    );
};

export default AcquisitionWtbKsp;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const acquisitionwtbksp = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...acquisitionwtbksp,
            };
            setFeatures(prev => ({ ...prev, acquisitionwtbksp: state }));
            return state;
        });
    };
    return (
        <Toolbar>
            <Tool>
                <ToolLabel>Display RTL</ToolLabel>
                <ToggleSwitch title="display RTL" onClick={handleDirClick} />
            </Tool>
        </Toolbar>
    );
};

export const template = ({ dir = "ltr", colors = [] }) => {
    const props = { dir, colors };
    return [
        headerTemplate(props),
        signifierTemplate(props),
        image(props),
        plainText({
            hasHeadline: false,
            hasBody: false,
            ...props,
        }),
        thirdsImageTemplate({ layout: "rtl", hasPrimary: false, ...props }),
        footerTemplate({ hasMiddleBlock: false, ...props }),
    ].join("");
};

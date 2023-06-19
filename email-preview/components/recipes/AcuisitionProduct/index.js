import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../../email/ModuleContainer";

import { template as headerTemplate } from "../../email/HeaderSignIn";
import { template as signifierTemplate } from "../../email/Signifier";
import { template as heroTemplate } from "../../email/HeroHeadline";
import { template as thirdsImageTemplate } from "../../email/ThirdsImage";
import { template as mediaTemplate } from "../../email/Media";
import { template as iconLinkListTemplate } from "../../email/IconLinkList";
import { template as footerTemplate } from "../../email/Footer";

const AquisitionProduct = ({ dir = "ltr", colors = [] }) => {
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

export default AquisitionProduct;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const aquisitionproduct = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...aquisitionproduct,
            };
            setFeatures(prev => ({ ...prev, aquisitionproduct: state }));
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
        heroTemplate({ dir }),
        thirdsImageTemplate({ layout: "ltr", hasPrimary: false, ...props }),
        thirdsImageTemplate({ layout: "rtl", hasPrimary: false, ...props }),
        thirdsImageTemplate({ layout: "ltr", hasPrimary: false, ...props }),
        mediaTemplate(props),
        iconLinkListTemplate({ dir }),
        footerTemplate(props),
    ].join("");
};

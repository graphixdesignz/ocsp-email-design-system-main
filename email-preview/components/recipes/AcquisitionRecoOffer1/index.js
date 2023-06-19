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
import { template as footerTemplate } from "../../email/Footer";
import { template as offerTemplate } from "../../email/Offer";

const AcquisitionRecoOffer1 = ({ dir = "ltr", colors = [] }) => {
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

export default AcquisitionRecoOffer1;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const acquisitionrecooffer1 = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...acquisitionrecooffer1,
            };
            setFeatures(prev => ({ ...prev, acquisitionrecooffer1: state }));
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
        offerTemplate(props),
        heroTemplate({ dir }),
        thirdsImageTemplate({ layout: "rtl", hasPrimary: false, ...props }),
        footerTemplate({ hasMiddleBlock: false, ...props }),
    ].join("");
};

import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../../email/ModuleContainer";

import { template as headerTemplate } from "../../email/HeaderSignIn";
import { template as signifierTemplate } from "../../email/Signifier";
import { template as overheadHeadline } from "../../email/OverheadHeadline";
import { template as thirdsImageTemplate } from "../../email/ThirdsImage";
import { template as footerTemplate } from "../../email/Footer";
import { template as offerTemplate } from "../../email/Offer";

const AcquisitionRecoOffer2 = ({ dir = "ltr", colors = [] }) => {
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

export default AcquisitionRecoOffer2;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const acquisitionrecooffer2 = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...acquisitionrecooffer2,
            };
            setFeatures(prev => ({ ...prev, acquisitionrecooffer2: state }));
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
        overheadHeadline({
            hasImage: false,
            hasTopSubhead: false,
            hasSubhead: false,
            hasBody: false,
            hasButton: false,
            dir,
        }),
        thirdsImageTemplate({ layout: "rtl", ...props }),
        thirdsImageTemplate({ layout: "ltr", hasPrimary: false, ...props }),
        footerTemplate({ hasMiddleBlock: false, ...props }),
    ].join("");
};

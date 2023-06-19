import ModuleContainer from "../../email/ModuleContainer";
import parse from "html-react-parser";
import { useContext, useState } from "react";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";

import { template as headerTemplate } from "../../email/HeaderSignIn";
import { template as signifierTemplate } from "../../email/Signifier";
import { template as overheadHeadlineTemplate } from "../../email/OverheadHeadline";
import { template as iconLinkListTemplate } from "../../email/IconLinkList";
import { template as footerTemplate } from "../../email/Footer";

const TermsOfService = ({ dir = "ltr", colors = [] }) => {
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

export default TermsOfService;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const termsofservice = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...termsofservice,
            };
            setFeatures(prev => ({
                ...prev,
                termsofservice: state,
            }));
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
        overheadHeadlineTemplate({
            colors: [],
            hasTopSubhead: false,
            hasBody: false,
            dir,
        }),
        iconLinkListTemplate({ hasTwo: true, hasThree: false, dir }),
        footerTemplate(props),
    ].join("");
};

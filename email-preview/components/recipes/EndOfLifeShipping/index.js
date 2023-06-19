import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../../email/ModuleContainer";

import { template as headerTemplate } from "../../email/HeaderSignIn";
import { template as signifierTemplate } from "../../email/Signifier";
import { template as dynamicHeadlineTemplate } from "../../email/DynamicHeadline";
import { template as heroHeadlineTemplate } from "../../email/HeroHeadline";
import { template as plainTextTemplate } from "../../email/PlainText";
import { template as mediaTemplate } from "../../email/Media";
import { template as underlinedHeadlineTemplate } from "../../email/Quote";
import { template as iconLinkListTemplate } from "../../email/IconLinkList";
import { template as footerTemplate } from "../../email/Footer";

const EndOfLifeShipping = ({ dir = "ltr", colors = [] }) => {
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

export default EndOfLifeShipping;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const endoflifeshipping = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...endoflifeshipping,
            };
            setFeatures(prev => ({
                ...prev,
                endoflifeshipping: state,
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
        dynamicHeadlineTemplate({ hasDivider: false, ...props }),
        heroHeadlineTemplate({
            hadHeadline: false,
            hasSubhead: false,
            dir,
        }),
        plainTextTemplate({ hasSubhead: false, dir }),
        mediaTemplate(props),
        underlinedHeadlineTemplate(props),
        iconLinkListTemplate({ dir }),
        footerTemplate(props),
    ].join("");
};

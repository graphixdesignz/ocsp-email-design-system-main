import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../../email/ModuleContainer";

import { template as headerTemplate } from "../../email/HeaderSignIn";
import { template as signifierTemplate } from "../../email/Signifier";
import { template as overheadHeadlineTemplate } from "../../email/OverheadHeadline";
import { template as thirdsImageTemplate } from "../../email/ThirdsImage";
import { template as iconLinkListTemplate } from "../../email/IconLinkList";
import { template as footerTemplate } from "../../email/Footer";

const Update = ({ dir = "ltr", colors = [] }) => {
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

export default Update;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const update = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...update,
            };
            setFeatures(prev => ({ ...prev, update: state }));
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
            hasTopSubhead: true,
            hasSubhead: false,
            dir,
        }),
        thirdsImageTemplate({
            layout: "ltr",
            hasButton: false,
            ...props,
        }),
        thirdsImageTemplate({ layout: "rtl", hasPrimary: false, ...props }),
        thirdsImageTemplate({
            layout: "ltr",
            hasButton: false,
            ...props,
        }),
        overheadHeadlineTemplate({
            hasTopSubhead: false,
            hasSubhead: false,
            dir,
        }),
        iconLinkListTemplate({ dir }),
        footerTemplate(props),
    ].join("");
};
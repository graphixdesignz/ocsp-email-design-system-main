import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../../email/ModuleContainer";

import { template as headerTemplate } from "../../email/HeaderSignIn";
import { template as signifierTemplate } from "../../email/Signifier";
import { template as plainTextTemplate } from "../../email/PlainText";
import { template as checkmarkListTemplate } from "../../email/CheckmarkList";

import { template as iconLinkListTemplate } from "../../email/IconLinkList";
import { template as footerTemplate } from "../../email/Footer";

const AlertInstructions = ({ dir = "ltr", colors = [] }) => {
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

export default AlertInstructions;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const notificationsnstructions = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...notificationsnstructions,
            };
            setFeatures(prev => ({
                ...prev,
                notificationsnstructions: state,
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
        plainTextTemplate({
            hasImage: false,
            hasSubhead: false,
            hasButton: false,
            dir,
        }),
        checkmarkListTemplate(props),
        iconLinkListTemplate({ dir }),
        footerTemplate(props),
    ].join("");
};
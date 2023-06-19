import ModuleContainer from "../../email/ModuleContainer";
import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";

import { template as headerTemplate } from "../../email/HeaderSignIn";
import { template as signifierTemplate } from "../../email/Signifier";
import { template as overheadHeadlineTemplate } from "../../email/OverheadHeadline";
import { template as plainTextTemplate } from "../../email/PlainText";
import { template as quoteTemplate } from "../../email/Quote";
import { template as surveyTemplate } from "../../email/Survey";
import { template as footerTemplate } from "../../email/Footer";

const SurveyStandard = ({ dir = "ltr", colors = [] }) => {
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

export default SurveyStandard;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const surveystandard = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...surveystandard,
            };
            setFeatures(prev => ({
                ...prev,
                surveystandard: state,
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
            hasDivider: false,
            hasImage: false,
            hasTopSubhead: false,
            hasSubhead: false,
            hasButton: false,
            hasBody: false,
            colors: [],
            dir,
        }),

        plainTextTemplate({
            hasDivider: true,
            hasHeadline: false,
            hasButton: false,
            hasSubhead: false,
            dir,
        }),
        quoteTemplate({
            hasDivider: true,
        }),
        surveyTemplate({
            hasSubhead: false,
            hasDivider: true,
        }),
        footerTemplate({
            hasMiddleBlock: false,
        }),
    ].join("");
};

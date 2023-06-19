import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    headline: "Welcome, [First&nbsp;Name]!",
};

export const rtlContent = {
    headline: "هذه الأفكار المغلوطة ح",
};

const DynamicHeadline = ({ dir = "ltr", hasDivider = true }) => {
    return (
        <ModuleContainer>
            {parse(template({ dir, hasDivider }))}
        </ModuleContainer>
    );
};

export default DynamicHeadline;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: true,
        hasEyebrow: true,
        hasAuthor: true,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const dynamicheadline = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...dynamicheadline,
            };
            setFeatures(prev => ({ ...prev, dynamicheadline: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const dynamicheadline = {
            ...state,
            hasDivider: checked,
        };
        setState(dynamicheadline);
        setFeatures(prev => ({ ...prev, dynamicheadline }));
    };
    return (
        <Toolbar>
            <Tool>
                <ToolLabel>Display RTL</ToolLabel>
                <ToggleSwitch title="display RTL" onClick={handleDirClick} />
            </Tool>
            <Tool>
                <ToolLabel>Display Divider</ToolLabel>
                <ToggleSwitch
                    title="display RTL"
                    onClick={handleDividerClick}
                    checked={true}
                />
            </Tool>
        </Toolbar>
    );
};

export const template = ({ dir = "ltr", hasDivider = true }) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const div = "border-bottom: 1px solid #000000;";
    const divider = hasDivider ? div : "";

    return `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="
        background-color: #ffffff;
        vertical-align: top;
        ${divider}
    "
    width="100%"
>
    <tr>
        <td
            style="
                background-color: #ffffff;
                color: #000000;
                mso-line-height-rule: exactly;
                padding: 20px;
                line-height: 36px;
                font-size: 36px;
                font-weight: 400;
                font-family: forma-djr-display, Montserrat,
                    Helvetica, 'Helvetica Neue', Arial, Roboto,
                    sans-serif;
            "
        >
            ${content.headline}
        </td>
    </tr>
</table>`;
};

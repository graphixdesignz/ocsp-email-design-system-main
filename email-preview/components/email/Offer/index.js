import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

import { colorWays } from "../../../lib/colors";

export const ltrContent = {
    offer: `Offer Message`,
};

export const rtlContent = {
    offer: "رسالة العرض",
};

const Offer = ({ dir = "ltr", colors = [] }) => {
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

export default Offer;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const offer = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...offer,
            };
            setFeatures(prev => ({ ...prev, offer: state }));
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
    const content = dir === "ltr" ? ltrContent : rtlContent;

    const { white } = colorWays;

    const [, , tertiary] = colors.length ? colors : white;

    const div =
        "border-bottom: 1px solid #000000; border-top: 1px solid #000000;";

    // inline dividers only appear in white / neutral color scheme
    const inlineDivider = colors.length ? "" : div;

    return `<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: ${tertiary}"
    width="100%"
>
    <tr>
        <td
            valign="middle"
        >
            <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                width="100%"
            >
                <tr>
                    <td
                        valign="middle"
                        style="
                            color: #000000;
                            ${inlineDivider}
                            mso-line-height-rule: exactly;
                            padding: 20px;
                            vertical-align: middle;
                            line-height: 18px;
                            font-size: 24px;
                            font-weight: 400;
                            text-transform: Uppercase;
                            font-family: forma-djr-micro,
                                Montserrat, Helvetica,
                                'Helvetica Neue', Arial, Roboto,
                                sans-serif;
                        "
                    >
                            ${content.offer}
                    </td>
                </tr>
            </table>
        </td>
        
    </tr>
</table>`;
};

import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

import { colorWays } from "../../../lib/colors";

export const ltrContent = {
    headline: `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua.`,
    ctaLabel: `Button`,
};

export const rtlContent = {
    headline: `لي الجانب الآخر نشجب ونستنكر
    هؤلاء الرجال المفتونون بنشوة
    اللحظة الهائمون في رغباتهم فلا
    يدركون ما يعقبها من الألم والأسي
    المحتم،`,
};

const Quote = ({ dir = "ltr", colors = [], hasDivider = true }) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    colors,
                    hasDivider,
                }),
            )}
        </ModuleContainer>
    );
};

export default Quote;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: true,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const quote = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...quote,
            };
            setFeatures(prev => ({ ...prev, quote: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const quote = {
            ...state,
            hasDivider: checked,
        };
        setState(quote);
        setFeatures(prev => ({ ...prev, quote }));
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
                    title="display Divider"
                    onClick={handleDividerClick}
                    checked={true}
                />
            </Tool>
        </Toolbar>
    );
};

export const template = ({ dir = "ltr", colors = [], hasDivider = true }) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const { grey } = colorWays;

    const [primary] = colors.length ? colors : grey;
    const div = "border-bottom: 1px solid #000000;";
    const divider = hasDivider ? div : "";
    return `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: ${primary};
    vertical-align: top;
     ${divider}"
    width="100%"

>
    <tr>
        <td
            style="
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

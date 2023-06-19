import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

import { colorWays } from "../../../lib/colors";

export const ltrContent = {
    headline: `Your account summary`,
    subhead: `With instant ink, you save`,
    ppm: `Pages per month`,
    cost: `Traditional cartridge cost`,
};

export const rtlContent = {
    headline: `ملخص حسابك`,
    subhead: `متوسط الخطة`,
    ppm: `الصفحات شهريا`,
    cost: `تكلفة الخرطوشة التقليدية`,
};

const AccountSummary = ({ dir = "ltr", hasDivider = true, colors = [] }) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    hasDivider,
                    colors,
                }),
            )}
        </ModuleContainer>
    );
};

export default AccountSummary;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const accountsummary = {
            dir: checked ? "rtl" : "ltr",
            hasDivider: true,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...accountsummary,
            };
            setFeatures(prev => ({ ...prev, accountsummary: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const accountsummary = {
            ...state,
            hasDivider: checked,
        };
        setState(accountsummary);
        setFeatures(prev => ({ ...prev, accountsummary }));
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

export const template = ({ dir = "ltr", hasDivider = true, colors = [] }) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const { black } = colorWays;

    const [primary] = colors.length ? colors : black;
    const div = "border-bottom: 1px solid #000000;";
    const divider = hasDivider ? div : "";

    return `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #e6e6e6; vertical-align: top; ${divider}"
    width="100%"
>
    <tbody>
        <tr>
            <td
                bgcolor="#E6E6E6"
                colspan="2"
                style="
                    background-color: #e6e6e6;
                    color: #000000;
                    border-bottom: 1px solid #000000;
                    mso-line-height-rule: exactly;
                    padding: 20px;
                    line-height: 24px;
                    font-size: 24px;
                    font-weight: 400;
                    font-family: forma-djr-display, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                "
            >
                ${content.headline}
            </td>
        </tr>
        <tr>
            <td
                bgcolor="#E6E6E6"
                colspan="2"
                style="
                    background-color: #e6e6e6;
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 8px 20px 0 20px;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: forma-djr-display, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                "
            >
                ${content.subhead}
            </td>
        </tr>
        <tr>
            <td
                bgcolor="#E6E6E6"
                colspan="2"
                style="
                    background-color: #e6e6e6;
                    color: ${primary};
                    border-bottom: 1px solid #000000;
                    mso-line-height-rule: exactly;
                    padding: 0px 12px 8px 12px;
                    line-height: 96px;
                    font-size: 96px;
                    font-weight: 400;
                    font-family: forma-djr-display, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                "
            >
                $00
            </td>
        </tr>
        <tr>
            <td
                bgcolor="#E6E6E6"
                width="50%"
                style="
                    background-color: #e6e6e6;
                    color: #000000;
                    border-right: 1px solid #000000;
                    mso-line-height-rule: exactly;
                    padding: 8px 20px 0 20px;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: forma-djr-display, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                    width: 50%;
                    vertical-align: top;
                "
            >
                ${content.ppm}
            </td>
            <td
                bgcolor="#E6E6E6"
                width="50%"
                style="
                    background-color: #e6e6e6;
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 8px 20px 0 8px;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: forma-djr-display, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                    width: 50%;
                    vertical-align: top;
                "
            >
                ${content.cost}
            </td>
        </tr>
        <tr>
            <td
                bgcolor="#E6E6E6"
                width="50%"
                style="
                    background-color: #e6e6e6;
                    color: #000000;
                    border-right: 1px solid #000000;
                    mso-line-height-rule: exactly;
                    padding: 4px 20px 8px 20px;
                    line-height: 36px;
                    font-size: 36px;
                    font-weight: 400;
                    font-family: forma-djr-display, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                    width: 50%;
                "
            >
                00
            </td>
            <td
                bgcolor="#E6E6E6"
                width="50%"
                style="
                    background-color: #e6e6e6;
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 4px 20px 8px 8px;
                    line-height: 36px;
                    font-size: 36px;
                    font-weight: 400;
                    font-family: forma-djr-display, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                    width: 50%;
                "
            >
                $00
            </td>
        </tr>
    </tbody>
</table>`;
};

import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import RadioButton from "../../RadioButton";
import ModuleContainer from "../ModuleContainer";

import { colorWays } from "../../../lib/colors";

export const ltrContent = {
    buName: `TYPE BU NAME HERE`,
};

export const rtlContent = {
    buName: "هذه الأفكار المغلوطة ح",
};

const Signifier = ({
    dir = "ltr",
    logo = true,
    logoWithBU = false,
    instantInk = false,
    hpOne = false,
    hpPlus = false,
    hpPlusPrintPlan = false,
    colors = [],
}) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    logo,
                    logoWithBU,
                    instantInk,
                    hpOne,
                    hpPlus,
                    hpPlusPrintPlan,
                    colors,
                }),
            )}
        </ModuleContainer>
    );
};

export default Signifier;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        content: ltrContent,
        logo: true,
        logoWithBU: false,
        instantInk: false,
        hpOne: false,
        hpPlus: false,
        hpPlusPrintPlan: false,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const signifier = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...signifier,
            };
            setFeatures(prev => ({ ...prev, signifier: state }));
            return state;
        });
    };
    const getSignfierClickHandler = variant => {
        return () => {
            const toggles = {
                logo: false,
                logoWithBU: false,
                instantInk: false,
                hpOne: false,
                hpPlus: false,
                hpPlusPrintPlan: false,
            };
            toggles[variant] = true;
            const signifier = {
                ...state,
                ...toggles,
            };
            setState(signifier);
            setFeatures(prev => ({ ...prev, signifier }));
        };
    };
    return (
        <Toolbar>
            <Tool>
                <ToolLabel>Display RTL</ToolLabel>
                <ToggleSwitch title="display RTL" onClick={handleDirClick} />
            </Tool>
            <Tool>
                <ToolLabel>HP Logo</ToolLabel>
                <RadioButton
                    name="signifier"
                    title="HP Logo"
                    onClick={getSignfierClickHandler("logo")}
                    checked
                />
            </Tool>
            <Tool>
                <ToolLabel>HP Logo + BU</ToolLabel>
                <RadioButton
                    name="signifier"
                    title="HP Logo with Business Unit"
                    onClick={getSignfierClickHandler("logoWithBU")}
                />
            </Tool>
            <Tool>
                <ToolLabel>Instant Ink</ToolLabel>
                <RadioButton
                    name="signifier"
                    title="Instant Ink"
                    onClick={getSignfierClickHandler("instantInk")}
                />
            </Tool>
            <Tool>
                <ToolLabel>HP One</ToolLabel>
                <RadioButton
                    name="signifier"
                    title="HP One"
                    onClick={getSignfierClickHandler("hpOne")}
                />
            </Tool>
            <Tool>
                <ToolLabel>HP+</ToolLabel>
                <RadioButton
                    name="signifier"
                    title="HP+"
                    onClick={getSignfierClickHandler("hpPlus")}
                />
            </Tool>
            <Tool>
                <ToolLabel>HP+ Print Plan</ToolLabel>
                <RadioButton
                    name="signifier"
                    title="HP+ Print Plan"
                    onClick={getSignfierClickHandler("hpPlusPrintPlan")}
                />
            </Tool>
        </Toolbar>
    );
};

export const template = ({
    dir = "ltr",
    logo = true,
    logoWithBU = false,
    instantInk = false,
    hpOne = false,
    hpPlus = false,
    hpPlusPrintPlan = false,
    colors = [],
}) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;

    const { grey } = colorWays;

    const [primary, secondary] = colors.length ? colors : grey;

    const div =
        dir === "ltr"
            ? "border-right: 1px solid #000000;"
            : "border-left: 1px solid #000000;";
    const divider = colors.length ? "" : div;

    const onlyLogo = `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: ${primary}"
    width="100%"
>
    <tr>
        <td
            valign="middle"
            style="${divider}"
        >
            <div style="height: 58px; line-height: 58px">
                &#8202;
            </div>
        </td>
        <td width="58" style="width: 58px">
            <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="vertical-align: top"
                width="100%"
            >
                <tr>
                    <td
                        valign="middle"
                        align="center"
                        bgcolor="${secondary}"
                        style="
                            background-color: ${secondary};
                            vertical-align: middle;
                            text-align: center;
                            padding: 8px;
                        "
                    >
                        <a href="https://example.com?utm_content=logo" style="text-decoration: none">
                            <img
                                src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/HPR_Black.png"
                                width="42"
                                height="42"
                                style="display: block"
                            />
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`;

    const bu = `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: ${primary}"
    width="100%"
>
    <tr>
        <td
            valign="middle"
            style="${divider}"
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
                            mso-line-height-rule: exactly;
                            padding: 20px;
                            vertical-align: middle;
                            line-height: 18px;
                            font-size: 14px;
                            font-weight: 400;
                            font-family: forma-djr-display,
                                Montserrat, Helvetica,
                                'Helvetica Neue', Arial, Roboto,
                                sans-serif;
                        "
                    >
                        <a href="https://example.com?utm_content=logo" style="text-decoration: none; color: #000000;">
                            ${content.buName}
                        </a>
                    </td>
                </tr>
            </table>
        </td>
        <td width="58" style="width: 58px">
            <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="vertical-align: top"
                width="100%"
            >
                <tr>
                    <td
                        valign="middle"
                        align="center"
                        bgcolor="${secondary}"
                        style="
                            background-color: ${secondary};
                            vertical-align: middle;
                            text-align: center;
                            padding: 8px;
                        "
                    >
                        <a href="https://example.com?utm_content=logo" style="text-decoration: none">
                            <img
                                src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/HPR_Black.png"
                                width="42"
                                height="42"
                                style="display: block"
                            />
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`;

    const ii = `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: ${primary}; vertical-align: top"
    width="100%"
>
    <tbody>
        <tr>
            <td
                valign="middle"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 15px 20px;
                    vertical-align: middle;
                "
            >
                <a href="https://example.com?utm_content=logo" style="text-decoration: none">
                    <img
                        src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/logos/HPInstantInk%402x.png"
                        width="76"
                        height="28"
                        alt="HP Instant Ink"
                    />
                </a>
            </td>
        </tr>
    </tbody>
</table>`;

    const hp1 = `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: ${primary}; vertical-align: top"
    width="100%"
>
    <tbody>
        <tr>
            <td
                valign="middle"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 15px 20px;
                    vertical-align: middle;
                "
            >
                <a href="https://example.com?utm_content=logo" style="text-decoration: none">
                    <img
                        src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/logos/HPOne.png"
                        width="72"
                        height="28"
                        alt="HP One"
                    />
                </a>
            </td>
        </tr>
    </tbody>
</table>`;

    const hppls = `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: ${primary}; vertical-align: top"
    width="100%"
>
    <tbody>
        <tr>
            <td
                valign="middle"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 15px 20px;
                    vertical-align: middle;
                "
            >
                <a href="https://example.com?utm_content=logo" style="text-decoration: none">
                    <img
                        src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/logos/HPplus.png"
                        width="39"
                        height="28"
                        alt="HP+"
                    />
                </a>
            </td>
        </tr>
    </tbody>
</table>`;

    const hpppp = `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: ${primary}; vertical-align: top"
    width="100%"
>
    <tbody>
        <tr>
            <td
                valign="middle"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 15px 20px;
                    vertical-align: middle;
                "
            >
                <a href="https://example.com?utm_content=logo" style="text-decoration: none">
                    <img
                        src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/logos/HPplusPrintPlan.png"
                        width="60"
                        height="28"
                        alt="HP+ Print Plan"
                    />
                </a>
            </td>
        </tr>
    </tbody>
</table>`;

    switch (true) {
        case logoWithBU:
            return bu;
            break;
        case instantInk:
            return ii;
            break;
        case hpOne:
            return hp1;
            break;
        case hpPlus:
            return hppls;
            break;
        case hpPlusPrintPlan:
            return hpppp;
            break;
        case logo:
        default:
            return onlyLogo;
            break;
    }
};

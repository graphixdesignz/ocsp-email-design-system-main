import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

import { colorWays } from "../../../lib/colors";

export const ltrContent = {
    headline: "Headline",
    subhead: "Subhead",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua.`,
    ctaLabel: `Button`,
};

export const rtlContent = {
    headline: "هذه الأفكار المغلوطة ح",
    subhead: "فلا أحد يرفض أو يكره أو يتجنب الش.",
    body: `لي الجانب الآخر نشجب ونستنكر
    هؤلاء الرجال المفتونون بنشوة
    اللحظة الهائمون في رغباتهم فلا
    يدركون ما يعقبها من الألم والأسي
    المحتم،`,
    ctaLabel: "عرض",
};

const OverheadHeadline = ({
    dir = "ltr",
    hasDivider = true,
    hasHeadline = true,
    hasImage = true,
    hasSubhead = true,
    hasTopSubhead = false,
    hasBody = true,
    hasButton = true,
    colors = [],
}) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    hasDivider,
                    hasHeadline,
                    hasImage,
                    hasSubhead,
                    hasTopSubhead,
                    hasBody,
                    hasButton,
                    colors,
                }),
            )}
        </ModuleContainer>
    );
};

export default OverheadHeadline;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: true,
        hasImage: true,
        haaSubhead: true,
        hasTopSubhead: false,
        hasBody: true,
        hasButton: true,
        hasImage: true,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const overheadheadline = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...overheadheadline,
            };
            setFeatures(prev => ({ ...prev, overheadheadline: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const overheadheadline = {
            ...state,
            hasDivider: checked,
        };
        setState(overheadheadline);
        setFeatures(prev => ({ ...prev, overheadheadline }));
    };
    const handleSubheadClick = e => {
        const checked = e.target.checked;
        const overheadheadline = {
            ...state,
            hasSubhead: checked,
        };
        setState(overheadheadline);
        setFeatures(prev => ({ ...prev, overheadheadline }));
    };
    const handleTopSubheadClick = e => {
        const checked = e.target.checked;
        const overheadheadline = {
            ...state,
            hasTopSubhead: checked,
        };
        setState(overheadheadline);
        setFeatures(prev => ({ ...prev, overheadheadline }));
    };
    const handleBodyClick = e => {
        const checked = e.target.checked;
        const overheadheadline = {
            ...state,
            hasBody: checked,
            hasButton: checked,
        };
        setState(overheadheadline);
        setFeatures(prev => ({ ...prev, overheadheadline }));
    };
    const handleImageClick = e => {
        const checked = e.target.checked;
        const overheadheadline = {
            ...state,
            hasImage: checked,
        };
        setState(overheadheadline);
        setFeatures(prev => ({ ...prev, overheadheadline }));
    };
    const handleButtonClick = e => {
        const checked = e.target.checked;
        const overheadheadline = {
            ...state,
            hasButton: checked,
        };
        setState(overheadheadline);
        setFeatures(prev => ({ ...prev, overheadheadline }));
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
            <Tool>
                <ToolLabel>Display Image</ToolLabel>
                <ToggleSwitch
                    title="display image"
                    onClick={handleImageClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Subhead</ToolLabel>
                <ToggleSwitch
                    name="subhead"
                    title="display subhead"
                    onClick={handleSubheadClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Top Subhead</ToolLabel>
                <ToggleSwitch
                    name="subhead"
                    title="display subhead"
                    onClick={handleTopSubheadClick}
                    checked={false}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Body</ToolLabel>
                <ToggleSwitch
                    title="display body"
                    onClick={handleBodyClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display CTA</ToolLabel>
                <ToggleSwitch
                    title="display cta"
                    onClick={handleButtonClick}
                    checked={true}
                />
            </Tool>
        </Toolbar>
    );
};

export const template = ({
    dir = "ltr",
    hasDivider = true,
    hasHeadline = true,
    hasImage = true,
    hasSubhead = true,
    hasTopSubhead = true,
    hasBody = true,
    hasButton = true,
    colors = [],
}) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const { white } = colorWays;

    // skip first color - the OG primary.
    // module begins with first tint.
    const [, primary, secondary, tertiary] = colors.length ? colors : white;

    const div = "border-bottom: 1px solid #000000;";
    const divider = hasDivider ? div : "";
    // inline dividers only appear in white / neutral color scheme
    const inlineDivider = colors.length || !hasBody ? "" : div;

    const headlineDivider = hasImage && !hasTopSubhead ? "" : inlineDivider;
    const topSubheadDivider = hasImage && hasTopSubhead ? "" : inlineDivider;

    const hd = `
    <tr>
        <td
            style="
                background-color: ${primary};
                color: #000000;
                ${headlineDivider}
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
    `;

    const img = `
    <tr>
        <td
            align="center"
            width="50%"
            style="
                font-size: 0px;
                padding: 0;
                word-break: break-word;
                width: 50%;
            "
        >
            <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="
                    border-collapse: collapse;
                    border-spacing: 0px;
                "
            >
                <tbody>
                    <tr>
                        <td>
                            <img
                                height="auto"
                                src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/media/ImageModule.jpg"
                                style="
                                    border: 0;
                                    display: block;
                                    outline: none;
                                    text-decoration: none;
                                    height: auto;
                                    width: 100%;
                                "
                                width="600"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>`;

    const sh = `
    <tr>
        <td
            style="
                background-color: ${secondary};
                color: #000000;
                ${inlineDivider}
                mso-line-height-rule: exactly;
                padding: 20px 20px;
                line-height: 24px;
                font-size: 24px;
                font-weight: 400;
                font-family: forma-djr-display, Montserrat,
                    Helvetica, 'Helvetica Neue', Arial, Roboto,
                    sans-serif;
            "
        >
            ${content.subhead}
        </td>
    </tr>
`;

    const tsh = `
    <tr>
    <td
        style="
            background-color: #ffffff;
            color: #000000;
            ${topSubheadDivider}
            mso-line-height-rule: exactly;
            padding: 10px 20px;
            line-height: 24px;
            font-size: 24px;
            font-weight: 400;
            font-family: forma-djr-display, Montserrat,
                Helvetica, 'Helvetica Neue', Arial, Roboto,
                sans-serif;
        "
    >
        ${content.subhead}
    </td>
</tr>`;

    const bd = `
    <tr>
        <td
            style="
                background-color: ${tertiary};
                color: #000000;
                mso-line-height-rule: exactly;
                padding: 20px;
                line-height: 20px;
                font-size: 16px;
                font-weight: 400;
                font-family: forma-djr-display, Montserrat,
                    Helvetica, 'Helvetica Neue', Arial, Roboto,
                    sans-serif;
            "
        >
            ${content.body}
        </td>
    </tr>`;

    const btn = `
<tr>
    <td
        bgcolor="${tertiary}"
        style="
            background-color: ${tertiary};
            color: #000000;
            mso-line-height-rule: exactly;
            padding: 0px 20px 20px 20px;
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            font-family: forma-djr-micro, Montserrat,
                Helvetica, 'Helvetica Neue', Arial, Roboto,
                sans-serif;
        "
    >
        <table
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="
                background-color: #000000;
                vertical-align: top;
            "
            width="100%"
        >
            <tbody>
                <tr>
                    <td
                        align="center"
                        valign="middle"
                        bgcolor="#000000"
                        style="
                            mso-line-height-rule: exactly;
                            mso-padding-alt: 10px;
                            background: #000000;
                            color: #ffffff;
                            padding: 0px;
                            line-height: 20px;
                            font-size: 16px;
                            font-weight: 400;
                            font-family: forma-djr-micro,
                                Montserrat, Helvetica,
                                'Helvetica Neue', Arial,
                                Roboto, sans-serif;
                        "
                    >
                        <a
                            href="https://example.com?utm_content=button"
                            style="
                                display: inline-block;
                                background: #000000;
                                color: #ffffff;
                                font-family: forma-djr-micro,
                                    Montserrat, Helvetica,
                                    'Helvetica Neue', Arial,
                                    Roboto, sans-serif;
                                font-size: 16px;
                                font-weight: 400;
                                line-height: 20px;
                                margin: 0;
                                text-decoration: none;
                                text-transform: none;
                                width: 100%;
                                padding: 8px 0px;
                                mso-padding-alt: 0px;
                            "
                            target="_blank"
                        >
                            ${content.ctaLabel}
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
`;

    const headline = hasHeadline ? hd : "";
    const image = hasImage ? img : "";
    const subhead = hasSubhead ? sh : "";
    const topsubhead = hasTopSubhead ? tsh : "";
    const body = hasBody ? bd : "";
    const button = hasButton ? btn : "";

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
    ${headline}
    ${topsubhead}
    ${image}
    ${subhead}
    ${body}
    ${button}
</table>`;
};

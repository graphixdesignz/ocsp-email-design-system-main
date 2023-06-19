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

const PlainText = ({
    dir = "ltr",
    hasDivider = true,
    hasHeadline = true,
    hasSubhead = true,
    hasBody = true,
    hasButton = true,
    hasImage = true,
    colors = [],
}) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    hasDivider,
                    hasHeadline,
                    hasSubhead,
                    hasBody,
                    hasButton,
                    hasImage,
                    colors,
                }),
            )}
        </ModuleContainer>
    );
};

export default PlainText;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: true,
        hasHeadline: true,
        hadSubhead: true,
        hasBody: true,
        hasButton: true,
        hasImage: true,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const plaintext = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...plaintext,
            };
            setFeatures(prev => ({ ...prev, plaintext: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const plaintext = {
            ...state,
            hasDivider: checked,
        };
        setState(plaintext);
        setFeatures(prev => ({ ...prev, plaintext }));
    };
    const handleHeadlineClick = e => {
        const checked = e.target.checked;
        const plaintext = {
            ...state,
            hasHeadline: checked,
        };
        setState(plaintext);
        setFeatures(prev => ({ ...prev, plaintext }));
    };
    const handleSubheadClick = e => {
        const checked = e.target.checked;
        const plaintext = {
            ...state,
            hasSubhead: checked,
        };
        setState(plaintext);
        setFeatures(prev => ({ ...prev, plaintext }));
    };
    const handleBodyClick = e => {
        const checked = e.target.checked;
        const plaintext = {
            ...state,
            hasBody: checked,
        };
        setState(plaintext);
        setFeatures(prev => ({ ...prev, plaintext }));
    };
    const handleButtonClick = e => {
        const checked = e.target.checked;
        const plaintext = {
            ...state,
            hasButton: checked,
        };
        setState(plaintext);
        setFeatures(prev => ({ ...prev, plaintext }));
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
                <ToolLabel>Display Headline</ToolLabel>
                <ToggleSwitch
                    title="display headline"
                    onClick={handleHeadlineClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Subhead</ToolLabel>
                <ToggleSwitch
                    title="display subhead"
                    onClick={handleSubheadClick}
                    checked={true}
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
    hasSubhead = true,
    hasBody = true,
    hasButton = true,
    colors = [],
}) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const { white } = colorWays;

    const [primary] = colors.length ? colors : white;

    const div = "border-bottom: 1px solid #000000;";
    const divider = hasDivider ? div : "";
    // inline dividers only appear in white / neutral color scheme
    const inlineDivider = colors.length ? "" : div;
    const subheadDivider = hasButton && !hasBody ? "" : inlineDivider;

    const hd = `
    <tr>
        <td
            style="
                background-color: ${primary};
                color: #000000;
                ${inlineDivider}
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

    const sh = `
    <tr>
        <td
            style="
                background-color: ${primary};
                color: #000000;
                ${subheadDivider}
                mso-line-height-rule: exactly;
                padding: 20px;
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
                background-color: ${primary};
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
        bgcolor="${primary}"
        style="
            background-color: ${primary};
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
    const subhead = hasSubhead ? sh : "";
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
        background-color: ${primary};
        vertical-align: top;
        ${divider}
    "
    width="100%"
>
    ${headline}
    ${subhead}
    ${body}
    ${button}    
</table>`;
};

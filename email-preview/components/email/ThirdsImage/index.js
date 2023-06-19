import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    subhead: "Lorem ipsum",
    copy: "	Lorem ipsum dolor sit",
    ctaLabel: `Button`,
};

export const rtlContent = {
    subhead: "هذه الأفكار المغلوطة ح",
    copy: "فلا أحد يرفض أو يكره أو يتجنب.",
    ctaLabel: "عرض",
};

const ThirdsImage = ({
    dir = "ltr",
    layout = "ltr",
    hasHeadline = true,
    hasButton = true,
    hasDivider = false,
    hasPrimary = false,
}) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    layout,
                    hasHeadline,
                    hasButton,
                    hasDivider,
                    hasPrimary,
                }),
            )}
        </ModuleContainer>
    );
};

export default ThirdsImage;

export const Features = () => {
    const { features, setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasHeadline: true,
        hasButton: true,
        hasDivider: false,
        hasPrimary: false,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const thirdsImage = {
            ...state,
            dir: checked ? "rtl" : "ltr",
        };
        setState(thirdsImage);
        setFeatures(prev => ({ ...prev, thirdsImage }));
    };
    const handleLayoutClick = e => {
        const checked = e.target.checked;
        const thirdsImage = {
            ...state,
            layout: checked ? "rtl" : "ltr",
        };
        setState(thirdsImage);
        setFeatures(prev => ({ ...prev, thirdsImage }));
    };
    const handleHeadlineClick = e => {
        const checked = e.target.checked;
        const thirdsImage = {
            ...state,
            hasHeadline: checked,
        };
        setState(thirdsImage);
        setFeatures(prev => ({ ...prev, thirdsImage }));
    };
    const handleButtonClick = e => {
        const checked = e.target.checked;
        const thirdsImage = {
            ...state,
            hasButton: checked,
        };
        setState(thirdsImage);
        setFeatures(prev => ({ ...prev, thirdsImage }));
    };
    const handlePrimaryClick = e => {
        const checked = e.target.checked;
        const thirdsImage = {
            ...state,
            hasPrimary: checked,
        };
        setState(thirdsImage);
        setFeatures(prev => ({ ...prev, thirdsImage }));
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const thirdsImage = {
            ...state,
            hasDivider: checked,
        };
        setState(thirdsImage);
        setFeatures(prev => ({ ...prev, thirdsImage }));
    };
    return (
        <Toolbar>
            <Tool>
                <ToolLabel>Display RTL</ToolLabel>
                <ToggleSwitch title="display RTL" onClick={handleDirClick} />
            </Tool>
            <Tool>
                <ToolLabel>Image Left</ToolLabel>
                <ToggleSwitch
                    title="display Image on left"
                    onClick={handleLayoutClick}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Headline</ToolLabel>
                <ToggleSwitch
                    title="display Headline"
                    onClick={handleHeadlineClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display CTA</ToolLabel>
                <ToggleSwitch
                    title="display CTA"
                    onClick={handleButtonClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Use Primary CTA</ToolLabel>
                <ToggleSwitch
                    title="display Primary CTA"
                    onClick={handlePrimaryClick}
                    checked={false}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Divider</ToolLabel>
                <ToggleSwitch
                    title="display divider"
                    onClick={handleDividerClick}
                    checked={false}
                />
            </Tool>
        </Toolbar>
    );
};

export const template = ({
    dir = "ltr",
    layout = "ltr",
    hasHeadline = true,
    hasButton = true,
    hasDivider = true,
    hasPrimary = true,
}) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const hd = `
    <tr>
    <td
        style="
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            padding-top: 20px;
            padding-right: 20px;
            padding-bottom: 10px;
            padding-left: 20px;
            line-height: 28px;
            font-size: 24px;
            font-weight: 400;
            font-family: forma-djr-display,
                Montserrat, Helvetica,
                'Helvetica Neue', Arial,
                Roboto, sans-serif;
        "
    >
    ${content.subhead}
    </td>
</tr>`;

    const link = `
<table
    dir="${dir}"
    bgcolor="#ffffff"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    width="100%"
    style="background-color: #ffffff"
>
    <tbody>
        <tr>
            <td
                style="
                    background-color: #ffffff;
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 0 20px 20px 20px;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: forma-djr-display,
                        Montserrat, Helvetica,
                        'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                "
            >
                <a
                    href="https://example.com?utm_content=thirds-image"
                    style="color: #000000; text-decoration: underline;"
                >
                    ${content.ctaLabel}
                </a>
            </td>
        </tr>
    </tbody>
</table>`;

    const btn = `
<table
    bgcolor="#ffffff"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    width="100%"
    style="background-color: #ffffff"
>
    <tr>
        <td
            style="
                padding: 20px;
                mso-padding-alt: 20px;
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
                                    Montserrat,
                                    Helvetica,
                                    'Helvetica Neue',
                                    Arial, Roboto,
                                    sans-serif;
                            "
                        >
                            <a
                                href="https://example.com?utm_source=thirds-image"
                                style="
                                    display: inline-block;
                                    background: #000000;
                                    color: #ffffff;
                                    font-family: forma-djr-micro,
                                        Montserrat,
                                        Helvetica,
                                        'Helvetica Neue',
                                        Arial,
                                        Roboto,
                                        sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    line-height: 20px;
                                    margin: 0;
                                    text-decoration: none;
                                    text-transform: none;
                                    width: 100%;
                                    padding: 8px 0;
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
</table>
    `;

    const div = ` border-bottom: 1px solid #000000;`;

    const buttonHtml = hasPrimary ? btn : link;

    const headline = hasHeadline ? hd : "";
    const button = hasButton ? buttonHtml : "";
    const divider = hasDivider ? div : "";

    return `
<table
    dir="${layout}"
    bgcolor="#ffffff"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    width="100%"
    style="background-color: #ffffff; ${divider}"
>
    <tr>
        <td
            width="66%"
            valign="top"
            style="background-color: #ffffff"
        >
            <table
                dir="${dir}"
                bgcolor="#ffffff"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                width="100%"
                style="background-color: #ffffff"
            >
                <tbody>
                    ${headline}
                    <tr>
                        <td
                            style="
                                background-color: #ffffff;
                                color: #000000;
                                mso-line-height-rule: exactly;
                                padding-top: ${hasHeadline ? `0px` : `20px`};
                                padding-right: 20px;
                                padding-bottom: 0px;
                                padding-left: 20px;
                                line-height: 20px;
                                font-size: 16px;
                                font-weight: 400;
                                font-family: forma-djr-display,
                                    Montserrat, Helvetica,
                                    'Helvetica Neue', Arial,
                                    Roboto, sans-serif;
                            "
                        >
                            ${content.copy}
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td
            rowspan="2"
            width="34%"
            background=""
            style="background-color: #E6E6E6"
        >
            <table
                dir="ltr"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="vertical-align: top"
                width="100%"
                height="100%"
            >
                <tbody>
                    <tr>
                        <td
                            align="center"
                            style="
                                font-size: 0px;
                                padding: 0;
                                word-break: break-word;
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
                                        <td style="width: 100%">
                                            <a href="https://example.com?utm_source=thirds-image">
                                                <img
                                                    height="auto"
                                                    alt="Thirds image description"
                                                    src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/media/ThirdsImageModuleRight.jpg"
                                                    style="
                                                        border: 0;
                                                        display: block;
                                                        outline: none;
                                                        text-decoration: none;
                                                        height: auto;
                                                        width: 100%;
                                                        object-fit: cover;
                                                    "
                                                    width="204"
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td
            width="50%"
            style="background-color: #ffffff"
            valign="bottom"
        >
            ${button}
        </td>
    </tr>
</table>`;
};

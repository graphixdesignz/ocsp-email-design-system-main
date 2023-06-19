import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    subhead: "Lorem ipsum",
    copy: "	Lorem ipsum dolor sit amet",
    ctaLabel: `Button`,
};

export const rtlContent = {
    subhead: "هذه الأفكار المغلوطة ح",
    copy: "فلا أحد يرفض أو يكره أو يتجنب.",
    ctaLabel: "عرض",
};

const SplitImage = ({
    dir = "ltr",
    layout = "ltr",
    hasHeadline = true,
    hasButton = true,
    hasDivider = true,
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
                }),
            )}
        </ModuleContainer>
    );
};

export default SplitImage;

export const Features = () => {
    const { features, setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasHeadline: true,
        hasButton: true,
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const splitImage = {
            ...state,
            dir: checked ? "rtl" : "ltr",
        };
        setState(splitImage);
        setFeatures(prev => ({ ...prev, splitImage }));
    };
    const handleLayoutClick = e => {
        const checked = e.target.checked;
        const splitImage = {
            ...state,
            layout: checked ? "rtl" : "ltr",
        };
        setState(splitImage);
        setFeatures(prev => ({ ...prev, splitImage }));
    };
    const handleHeadlineClick = e => {
        const checked = e.target.checked;
        const splitImage = {
            ...state,
            hasHeadline: checked,
        };
        setState(splitImage);
        setFeatures(prev => ({ ...prev, splitImage }));
    };
    const handleButtonClick = e => {
        const checked = e.target.checked;
        const splitImage = {
            ...state,
            hasButton: checked,
        };
        setState(splitImage);
        setFeatures(prev => ({ ...prev, splitImage }));
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const splitImage = {
            ...state,
            hasDivider: checked,
        };
        setState(splitImage);
        setFeatures(prev => ({ ...prev, splitImage }));
    };
    return (
        <Toolbar>
            <Tool>
                <ToolLabel>Display RTL</ToolLabel>
                <ToggleSwitch title="display RTL" onClick={handleDirClick} />
            </Tool>
            <Tool>
                <ToolLabel>Image Left</ToolLabel>
                <ToggleSwitch title="display RTL" onClick={handleLayoutClick} />
            </Tool>
            <Tool>
                <ToolLabel>Display Headline</ToolLabel>
                <ToggleSwitch
                    title="display RTL"
                    onClick={handleHeadlineClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display CTA</ToolLabel>
                <ToggleSwitch
                    title="display RTL"
                    onClick={handleButtonClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Divider</ToolLabel>
                <ToggleSwitch
                    title="display RTL"
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

    const btn = `
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
                    href="https://example.com?utm_source=split-image"
                    style="color: #000000; text-decoration: underline;"
                >
                    Button
                </a>
            </td>
        </tr>
    </tbody>
</table>
    `;

    const div = ` border-bottom: 1px solid #000000;`;

    const headline = hasHeadline ? hd : "";
    const button = hasButton ? btn : "";
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
    style="background-color: #ffffff;${divider}"
>
    <tr>
        <td
            width="50%"
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
            width="50%"
            style="background-color: #ffffff"
        >
            <table
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
                                        <td
                                            style="width: 300px;"
                                        >
                                            <a href="https://example.com?utm_source=split-image">
                                                <img
                                                    height="auto"
                                                    src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/media/SplitImageModule.jpg"
                                                    style="
                                                        border: 0;
                                                        display: block;
                                                        outline: none;
                                                        text-decoration: none;
                                                        height: auto;
                                                        width: 100%;
                                                        object-fit: cover;
                                                    "
                                                    width="300"
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

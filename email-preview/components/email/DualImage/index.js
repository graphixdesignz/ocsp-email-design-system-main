import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    subhead: "Subhead",
    body: "Lorem ipsum dolor sit amet consectet",
    ctaLabel: "Button",
};

export const rtlContent = {
    subhead: "هذه الأفكار المغلوطة ح",
    body: "فلا أحد يرفض أو يكره أو يتجنب الش.",
    ctaLabel: "عرض",
};

const DualImage = ({
    dir = "ltr",
    content = ltrContent,
    hasDivider = true,
}) => {
    return (
        <ModuleContainer>
            {parse(template({ dir, content, hasDivider }))}
        </ModuleContainer>
    );
};

export default DualImage;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: true,
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const dualimage = {
            dir: checked ? "rtl" : "ltr",
            content: checked ? rtlContent : ltrContent,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...dualimage,
            };
            setFeatures(prev => ({ ...prev, dualimage: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const dualimage = {
            ...state,
            hasDivider: checked,
        };
        setState(dualimage);
        setFeatures(prev => ({ ...prev, dualimage }));
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

export const template = ({
    dir = "ltr",
    content = ltrContent,
    hasDivider = true,
}) => {
    const ipl = "padding: 10px 4px 10px 20px;";
    const ipr = "padding: 10px 20px 10px 4px;";
    const tpl = "padding: 0 4px 10px 20px;";
    const tpr = "padding: 0 20px 10px 4px;";

    const imagePaddingLeft = dir === "ltr" ? ipl : ipr;
    const imagePaddingRight = dir === "ltr" ? ipr : ipl;
    const textPaddingLeft = dir === "ltr" ? tpl : tpr;
    const textPaddingRight = dir === "ltr" ? tpr : tpl;

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
                        <td style="${imagePaddingLeft}">
                            <a href="https://example.com?utm_content=image" style="text-decoration: none;">
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
                                    width="280"
                                />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
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
                        <td style="${imagePaddingRight}">
                            <a href="https://example.com?utm_content=image" style="text-decoration: none;">
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
                                    width="280"
                                />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td
            style="
                background-color: #ffffff;
                color: #000000;
                mso-line-height-rule: exactly;
                ${textPaddingLeft}
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
        <td
            style="
                background-color: #ffffff;
                color: #000000;
                mso-line-height-rule: exactly;
                ${textPaddingRight}
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
    <tr>
        <td
            style="
                background-color: #ffffff;
                color: #000000;
                mso-line-height-rule: exactly;
                ${textPaddingLeft}
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
        <td
            style="
                background-color: #ffffff;
                color: #000000;
                mso-line-height-rule: exactly;
                ${textPaddingRight}
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
    </tr>
    <tr>
        <td
            style="
                background-color: #ffffff;
                color: #000000;
                mso-line-height-rule: exactly;
                ${textPaddingLeft}
                line-height: 20px;
                font-size: 16px;
                font-weight: 400;
                font-family: forma-djr-display, Montserrat,
                    Helvetica, 'Helvetica Neue', Arial, Roboto,
                    sans-serif;
            "
        >
            <a
                href="https://example.com?utm_content=button"
                style="
                    color: #000000;
                    text-decoration: underline;
                "
            >
                ${content.ctaLabel}
            </a>
        </td>
        <td
            style="
                background-color: #ffffff;
                color: #000000;
                mso-line-height-rule: exactly;
                ${textPaddingRight}
                line-height: 20px;
                font-size: 16px;
                font-weight: 400;
                font-family: forma-djr-display, Montserrat,
                    Helvetica, 'Helvetica Neue', Arial, Roboto,
                    sans-serif;
            "
        >
            <a
                href="https://example.com?utm_content=button"
                style="
                    color: #000000;
                    text-decoration: underline;
                "
            >
                ${content.ctaLabel}
            </a>
        </td>
    </tr>
</table>`;
};

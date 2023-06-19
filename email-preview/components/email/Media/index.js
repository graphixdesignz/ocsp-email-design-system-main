import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    headline: "Subhead",
    copy: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quaerat ea. Minima eligendi rerum numquam iste fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quaerat ea. Minima eligendi rerum numquam iste fuga.`,
    ctaLabel: `Button`,
};

export const rtlContent = {
    headline: "هذه الأفكار المغلوطة ح",
    copy: `لي الجانب الآخر نشجب ونستنكر
    هؤلاء الرجال المفتونون بنشوة
    اللحظة الهائمون في رغباتهم فلا
    يدركون ما يعقبها من الألم والأسي
    المحتم، واللوم كذلك يشمل هؤلاء
    الذين أخفقوا في واجباتهم نتيجة
    لضعف إرادتهم فيتساوي مع هؤلاء
    الذين يتجنبون وينأون عن تحمل
    الكدح والألم .`,
    ctaLabel: "عرض",
};

const Media = ({
    dir = "ltr",
    hasHeadline = true,
    hasButton = true,
    hasDivider = true,
}) => {
    return (
        <ModuleContainer>
            {parse(template({ dir, hasHeadline, hasButton, hasDivider }))}
        </ModuleContainer>
    );
};

export default Media;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasHeadline: true,
        hasButton: true,
        hasDivider: false,
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const media = {
            ...state,
            dir: checked ? "rtl" : "ltr",
        };
        setState(media);
        setFeatures(prev => ({ ...prev, media }));
    };
    const handleHeadlineClick = e => {
        const checked = e.target.checked;
        const media = {
            ...state,
            hasHeadline: checked,
        };
        setState(media);
        setFeatures(prev => ({ ...prev, media }));
    };
    const handleButtonClick = e => {
        const checked = e.target.checked;
        const media = {
            ...state,
            hasButton: checked,
        };
        setState(media);
        setFeatures(prev => ({ ...prev, media }));
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const media = {
            ...state,
            hasDivider: checked,
        };
        setState(media);
        setFeatures(prev => ({ ...prev, media }));
    };
    return (
        <Toolbar>
            <Tool>
                <ToolLabel>Display RTL</ToolLabel>
                <ToggleSwitch title="display RTL" onClick={handleDirClick} />
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
    hasHeadline = true,
    hasButton = true,
    hasDivider = true,
}) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const hd = `
    <tr>
    <td
        bgcolor="#ffffff"
        style="
            background-color: #ffffff;
            color: #000000;
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
</tr>`;

    const btn = `
    <tr>
    <td
        bgcolor="#ffffff"
        style="
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            background-color: #ffffff;
            padding: 10px 20px 20px 20px;
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            font-family: forma-djr-micro, Montserrat,
                Helvetica, 'Helvetica Neue', Arial,
                Roboto, sans-serif;
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
                                    Montserrat,
                                    Helvetica,
                                    'Helvetica Neue',
                                    Arial, Roboto,
                                    sans-serif;
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

    const div = ` border-bottom: 1px solid #000000;`;

    const headline = hasHeadline ? hd : "";
    const button = hasButton ? btn : "";
    const divider = hasDivider ? div : "";

    return `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #ffffff; vertical-align: top;${divider}"
    width="100%"
>
    <tbody>
        ${headline}
        <tr>
            <td
                bgcolor="#ffffff"
                style="
                    background-color: #ffffff;
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 0px 0 10px 0;
                    line-height: 28px;
                    font-size: 24px;
                    font-weight: 400;
                    font-family: forma-djr-micro, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
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
                            <td style="width: 600px">
                                <a href="https://example.com?utm_content=image" style="text-decoration: none;">
                                    <img
                                        src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/media/MediaModule.jpg"
                                        style="
                                            border: 0;
                                            display: block;
                                            outline: none;
                                            text-decoration: none;
                                            height: auto;
                                            width: 100%;
                                            font-size: 16px;
                                        "
                                        width="600"
                                        height="auto"
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
                bgcolor="#ffffff"
                style="
                    background-color: #ffffff;
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 10px 20px;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: forma-djr-micro, Montserrat,
                        Helvetica, Helvetica Neue, Arial, Roboto,
                        sans-serif;
                "
            >
                ${content.copy}
            </td>
        </tr>
        ${button}
    </tbody>
</table>`;
};

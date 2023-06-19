import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    headline: "List name",
    listItem: "	Lorem ipsum dolor sit amet consectet",
    longListItem: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quaerat ea. Minima eligendi rerum numquam iste fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quaerat ea. Minima eligendi rerum numquam iste fuga.`,
    ctaLabel: `Button`,
};

export const rtlContent = {
    headline: "هذه الأفكار المغلوطة ح",
    listItem: "فلا أحد يرفض أو يكره أو يتجنب الش.",
    longListItem: `لي الجانب الآخر نشجب ونستنكر
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

const CheckmarkList = ({
    dir = "ltr",
    content = ltrContent,
    hasHeadline = true,
    hasButton = true,
    hasDivider = true,
}) => {
    return (
        <ModuleContainer>
            {parse(
                template({ dir, content, hasHeadline, hasButton, hasDivider }),
            )}
        </ModuleContainer>
    );
};

export default CheckmarkList;

export const Features = () => {
    const { features, setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasHeadline: true,
        hasButton: true,
        hasDivider: true,
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const checkmarkList = {
            dir: checked ? "rtl" : "ltr",
            content: checked ? rtlContent : ltrContent,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...checkmarkList,
            };
            setFeatures(prev => ({ ...prev, checkmarkList: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const checkmarkList = {
            ...state,
            hasDivider: checked,
        };
        setState(checkmarkList);
        setFeatures(prev => ({ ...prev, checkmarkList }));
    };
    const handleHeadlineClick = e => {
        const checked = e.target.checked;
        const checkmarkList = {
            hasHeadline: checked,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...checkmarkList,
            };
            setFeatures(prev => ({ ...prev, checkmarkList: state }));
            return state;
        });
    };
    const handleButtonClick = e => {
        const checked = e.target.checked;
        const checkmarkList = {
            hasButton: checked,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...checkmarkList,
            };
            setFeatures(prev => ({ ...prev, checkmarkList: state }));
            return state;
        });
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
        </Toolbar>
    );
};

export const template = ({
    dir = "ltr",
    content = ltrContent,
    hasHeadline = true,
    hasButton = true,
    hasDivider = true,
}) => {
    const div = "border-bottom: 1px solid #000000;";
    const divider = hasDivider ? div : "";
    const hd = `
    <tr>
    <td
        bgcolor="#ffffff"
        style="
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: 20px 20px 10px 20px;
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
            padding: 10px 20px;
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
                            href="https://example.com?utm_content=list"
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
                                padding: 8px;
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
    const button = hasButton ? btn : "";

    return `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #ffffff; vertical-align: top; ${divider}"
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
                    padding: ${hasHeadline ? `0px 20px` : `20px 20px 0px 20px`};
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
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                        background-color: #ffffff;
                        vertical-align: top;
                    "
                    width="100%"
                >
                    <tbody>
                        <tr>
                            <td
                                bgcolor="#ffffff"
                                valign="top"
                                width="36"
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    width: 36px;
                                    vertical-align: top;
                                    padding: 10px 0;
                                    margin: 0;
                                "
                            >
                                <img
                                    src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/list/IconCheckmark.png"
                                    alt=""
                                    width="28"
                                    height="28"
                                    style="display: block"
                                />
                            </td>
                            <td
                                bgcolor="#ffffff"
                                valign="middle"
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    padding: 10px 0px;
                                    line-height: 20px;
                                    font-size: 16px;
                                    font-weight: 400;
                                    font-family: forma-djr-micro,
                                        Montserrat, Helvetica,
                                        Helvetica Neue, Arial,
                                        Roboto, sans-serif;
                                "
                            >
                                ${content.listItem}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                        background-color: #ffffff;
                        vertical-align: top;
                    "
                    width="100%"
                >
                    <tbody>
                        <tr>
                            <td
                                bgcolor="#ffffff"
                                valign="top"
                                width="36"
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    width: 36px;
                                    vertical-align: top;
                                    padding: 10px 0;
                                    margin: 0;
                                "
                            >
                                <img
                                    src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/list/IconCheckmark.png"
                                    alt=""
                                    width="28"
                                    height="28"
                                    style="display: block"
                                />
                            </td>
                            <td
                                bgcolor="#ffffff"
                                valign="middle"
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    padding: 10px 0px;
                                    line-height: 20px;
                                    font-size: 16px;
                                    font-weight: 400;
                                    font-family: forma-djr-micro,
                                        Montserrat, Helvetica,
                                        'Helvetica Neue', Arial,
                                        Roboto, sans-serif;
                                "
                            >
                                ${content.listItem}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                        background-color: #ffffff;
                        vertical-align: top;
                    "
                    width="100%"
                >
                    <tbody>
                        <tr>
                            <td
                                bgcolor="#ffffff"
                                valign="top"
                                width="36"
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    width: 36px;
                                    vertical-align: top;
                                    padding: 10px 0;
                                    margin: 0;
                                "
                            >
                                <img
                                    src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/list/IconCheckmark.png"
                                    alt=""
                                    width="28"
                                    height="28"
                                    style="display: block"
                                />
                            </td>
                            <td
                                bgcolor="#ffffff"
                                valign="middle"
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    padding: 10px 0px;
                                    line-height: 20px;
                                    font-size: 16px;
                                    font-weight: 400;
                                    font-family: forma-djr-micro,
                                        Montserrat, Helvetica,
                                        'Helvetica Neue', Arial,
                                        Roboto, sans-serif;
                                "
                            >
                                ${content.longListItem}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        ${button}
        <tr>
            <td
                bgcolor="#ffffff"
                style="
                    background-color: #ffffff;
                    font-size: 0px;
                    word-break: break-word;
                "
            >
                <div style="height: 10px; line-height: 10px">
                    &#8202;
                </div>
            </td>
        </tr>
    </tbody>
</table>`;
};

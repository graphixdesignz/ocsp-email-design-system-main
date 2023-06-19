import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    headline: "Headline",
    eyebrow: "EYEBROW",
    author: "Author",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.`,
};

export const rtlContent = {
    headline: "هذه الأفكار المغلوطة ح",
    eyebrow: "الإنسان",
    author: "أن يمسك",
    body: `لي الجانب الآخر نشجب ونستنكر
    هؤلاء الرجال المفتونون بنشوة
    اللحظة الهائمون في رغباتهم فلا
    يدركون ما يعقبها من الألم والأسي
    المحتم، واللوم كذلك يشمل هؤلاء
    الذين أخفقوا في واجباتهم نتيجة
    لضعف إرادتهم فيتساوي مع هؤلاء
    الذين يتجنبون وينأون عن تحمل
    الكدح والألم .`,
};

const Editorial = ({
    dir = "ltr",
    content = ltrContent,
    hasDivider = true,
    hasEyebrow = true,
    hasAuthor = true,
}) => {
    return (
        <ModuleContainer>
            {parse(
                template({ dir, content, hasDivider, hasEyebrow, hasAuthor }),
            )}
        </ModuleContainer>
    );
};

export default Editorial;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: true,
        hasEyebrow: true,
        hasAuthor: true,
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const editorial = {
            dir: checked ? "rtl" : "ltr",
            content: checked ? rtlContent : ltrContent,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...editorial,
            };
            setFeatures(prev => ({ ...prev, editorial: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const editorial = {
            ...state,
            hasDivider: checked,
        };
        setState(editorial);
        setFeatures(prev => ({ ...prev, editorial }));
    };
    const handleEyebrowClick = e => {
        const checked = e.target.checked;
        const editorial = {
            ...state,
            hasEyebrow: checked,
        };
        setState(editorial);
        setFeatures(prev => ({ ...prev, editorial }));
    };
    const handleAuthorClick = e => {
        const checked = e.target.checked;
        const editorial = {
            ...state,
            hasAuthor: checked,
        };
        setState(editorial);
        setFeatures(prev => ({ ...prev, editorial }));
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
                <ToolLabel>Display Eyebrow</ToolLabel>
                <ToggleSwitch
                    title="display Eyebrow"
                    onClick={handleEyebrowClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Author</ToolLabel>
                <ToggleSwitch
                    title="display Author"
                    onClick={handleAuthorClick}
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
    hasEyebrow = true,
    hasAuthor = true,
}) => {
    const div = "border-bottom: 1px solid #000000;";
    const divider = hasDivider ? div : "";

    const eb = `
    <tr>
    <td
        style="
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: 0px 20px 8px 20px;
            line-height: 18px;
            font-size: 14px;
            font-weight: 400;
            font-family: forma-djr-display, Montserrat,
                Helvetica, 'Helvetica Neue', Arial, Roboto,
                sans-serif;
            text-transform: uppercase;
        "
    >
        ${content.eyebrow}
    </td>
</tr>`;
    const eyebrow = hasEyebrow ? eb : "";

    const auth = `<tr>
    <td
        style="
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: 4px 20px 0 20px;
            line-height: 18px;
            font-size: 14px;
            font-weight: 400;
            font-family: forma-djr-display, Montserrat,
                Helvetica, 'Helvetica Neue', Arial, Roboto,
                sans-serif;
        "
    >
        ${content.author}
    </td>
</tr>`;
    const author = hasAuthor ? auth : "";

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
    ${eyebrow}
    <tr>
        <td
            style="
                background-color: #ffffff;
                color: #000000;
                mso-line-height-rule: exactly;
                padding: 0px 20px;
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
    ${author}
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
                        <td style="padding: 20px 20px 0 20px">
                            <img
                                height="auto"
                                src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/cards/Camparision.jpg"
                                style="
                                    border: 0;
                                    display: block;
                                    outline: none;
                                    text-decoration: none;
                                    height: auto;
                                    width: 100%;
                                "
                                width="560"
                            />
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
                padding: 10px 20px 20px 20px;
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
</table>`;
};

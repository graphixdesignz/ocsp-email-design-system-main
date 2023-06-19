import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    subhead: "Subhead lorem ipsum dolor sit amet consectet",
    listItem: "Lorem ipsum dolor sit amet consectet",
    longListItem:
        "Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, minim",
    ctaLabel: "Button",
};

export const rtlContent = {
    subhead: "هذه الأفكار المغلوطة ح",
    listItem: "فلا أحد يرفض أو يكره أو يتجنب الش.",
    longListItem:
        "فلا أحد يرفض أو يكره أو يتجنب الش .فلا أحد يرفض أو يكره أو يتجنب الش.",
    ctaLabel: "عرض",
};

const Comparison = ({
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

export default Comparison;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: true,
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const comparison = {
            dir: checked ? "rtl" : "ltr",
            content: checked ? rtlContent : ltrContent,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...comparison,
            };
            setFeatures(prev => ({ ...prev, comparison: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const comparison = {
            ...state,
            hasDivider: checked,
        };
        setState(comparison);
        setFeatures(prev => ({ ...prev, comparison }));
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
                    title="Display Divider"
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
    const div = "border-bottom: 1px solid #000000;";

    const divider = hasDivider ? div : "";
    const middleDivider =
        dir === "ltr"
            ? "border-right: 1px solid #000000;"
            : "border-left: 1px solid #000000;";

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
                    <!-- photos -->
                    <tr>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}
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
                                            <a
                                                href="https://example.com?utm_content=image"
                                                style="text-decoration: none"
                                            >
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
                                                    width="300"
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
                                        <td>
                                            <a
                                                href="https://example.com?utm_content=image"
                                                style="text-decoration: none"
                                            >
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
                                                    width="300"
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <!-- subhead -->
                    <tr>
                        <td
                            align="center"
                            valign="top"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}
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
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 12px 0px 8px 0px;
                                            line-height: 30px;
                                            font-size: 24px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        ${content.subhead}
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td
                            align="center"
                            valign="top"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
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
                                    background-color: #ffffff;
                                    vertical-align: top;
                                "
                                width="100%"
                            >
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;

                                            mso-line-height-rule: exactly;
                                            padding: 12px 0px 8px 0px;
                                            line-height: 30px;
                                            font-size: 24px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        ${content.subhead}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- borders -->
                    <tr>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}
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
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            border-bottom: 1px solid #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 0;
                                            line-height: 0px;
                                            font-size: 0px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
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
                                    background-color: #ffffff;
                                    vertical-align: top;
                                "
                                width="100%"
                            >
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            border-bottom: 1px solid #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 0px;
                                            line-height: 0px;
                                            font-size: 0px;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- row -->
                    <tr>
                        <td
                            align="center"
                            valign="top"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}
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
                                <tr>
                                    <td
                                        style="
                                            vertical-align: top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 12px 0px 8px 0px;
                                            line-height: 20px;
                                            font-size: 16px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        ${content.listItem}
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td
                            align="center"
                            valign="top"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
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
                                    background-color: #ffffff;
                                    vertical-align: top;
                                "
                                width="100%"
                            >
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 12px 0px 8px 0px;
                                            line-height: 20px;
                                            font-size: 16px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                       ${content.longListItem}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- borders -->
                    <tr>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}
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
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            border-bottom: 1px solid #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 0;
                                            line-height: 0px;
                                            font-size: 0px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
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
                                    background-color: #ffffff;
                                    vertical-align: top;
                                "
                                width="100%"
                            >
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            border-bottom: 1px solid #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 0px;
                                            line-height: 0px;
                                            font-size: 0px;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- row -->
                    <tr>
                        <td
                            align="center"
                            valign="top"
                            width="50%"
                            style="
                                vertical-align: text-top;
                                font-size: 0px;
                                padding: 0 16px 0 16px;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}
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
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 12px 0px 8px 0px;
                                            line-height: 20px;
                                            font-size: 16px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        ${content.listItem}
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td
                            align="center"
                            valign="top"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
                                word-break: break-word;
                                width: 50%;
                                vertical-align: text-top;
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
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 12px 0px 8px 0px;
                                            line-height: 20px;
                                            font-size: 16px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        ${content.listItem}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- borders -->
                    <tr>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}: 1px solid #000000;
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
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            border-bottom: 1px solid #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 0;
                                            line-height: 0px;
                                            font-size: 0px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
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
                                    background-color: #ffffff;
                                    vertical-align: top;
                                "
                                width="100%"
                            >
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            border-bottom: 1px solid #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 0px;
                                            line-height: 0px;
                                            font-size: 0px;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- row -->
                    <tr>
                        <td
                            align="center"
                            valign="top"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}
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
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 12px 0px 8px 0px;
                                            line-height: 20px;
                                            font-size: 16px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        ${content.longListItem}
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td
                            align="center"
                            valign="top"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
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
                                    background-color: #ffffff;
                                    vertical-align: top;
                                "
                                width="100%"
                            >
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 12px 0px 8px 0px;
                                            line-height: 20px;
                                            font-size: 16px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        ${content.listItem}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- borders -->
                    <tr>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}
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
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            border-bottom: 1px solid #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 0;
                                            line-height: 0px;
                                            font-size: 0px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0 16px 0 16px;
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
                                    background-color: #ffffff;
                                    vertical-align: top;
                                "
                                width="100%"
                            >
                                <tr>
                                    <td
                                        style="
                                            vertical-align: text-top;
                                            background-color: #ffffff;
                                            color: #000000;
                                            border-bottom: 1px solid #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 0px;
                                            line-height: 0px;
                                            font-size: 0px;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
                                                sans-serif;
                                        "
                                    >
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- soft cta -->
                    <tr>
                        <td
                            align="center"
                            width="50%"
                            style="
                                font-size: 0px;
                                padding: 0;
                                word-break: break-word;
                                width: 50%;
                                ${middleDivider}
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
                                <tr>
                                    <td
                                        style="
                                            background-color: #ffffff;
                                            color: #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 12px 16px 20px 16px;
                                            line-height: 20px;
                                            font-size: 16px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
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
                                    background-color: #ffffff;
                                    vertical-align: top;
                                "
                                width="100%"
                            >
                                <tr>
                                    <td
                                        style="
                                            background-color: #ffffff;
                                            color: #000000;
                                            mso-line-height-rule: exactly;
                                            padding: 12px 16px 20px 16px;
                                            line-height: 20px;
                                            font-size: 16px;
                                            font-weight: 400;
                                            font-family: forma-djr-display,
                                                Montserrat, Helvetica,
                                                'Helvetica Neue', Arial, Roboto,
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
                            </table>
                        </td>
                    </tr>
                </table>
    `;
};

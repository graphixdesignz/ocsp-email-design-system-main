import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    subhead:
        "Based on your experience, how likely are you to recommend HP ONE?",
    notLikely: "1 - Not at all likely",
    extremelyLikely: "10 - Extremely likely",
    ctaLabel: "Take Survey",
};

export const rtlContent = {
    subhead:
        "بناءً على تجربتك ، ما مدى احتمالية ذلك أوصي بـ HP ONE؟هذه الأفكار المغلوطة ح",
    notLikely: "1 - غير محتمل على الإطلاق",
    extremelyLikely: "10 - محتمل للغاية",
    ctaLabel: "شارك في",
};

const Survey = ({ dir = "ltr", hasSubhead = true, hasDivider = true }) => {
    return (
        <ModuleContainer>
            {parse(template({ dir, hasSubhead, hasDivider }))}
        </ModuleContainer>
    );
};

export default Survey;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasSubhead: true,
        hasDivider: true,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const survey = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...survey,
            };
            setFeatures(prev => ({ ...prev, survey: state }));
            return state;
        });
    };
    const handleSubheadClick = e => {
        const checked = e.target.checked;
        const survey = {
            ...state,
            hasSubhead: checked,
        };
        setState(survey);
        setFeatures(prev => ({ ...prev, survey }));
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const survey = {
            ...state,
            hasDivider: checked,
        };
        setState(survey);
        setFeatures(prev => ({ ...prev, survey }));
    };

    return (
        <Toolbar>
            <Tool>
                <ToolLabel>Display RTL</ToolLabel>
                <ToggleSwitch title="display RTL" onClick={handleDirClick} />
            </Tool>
            <Tool>
                <ToolLabel>Display Subhead</ToolLabel>
                <ToggleSwitch
                    title="display Subhead"
                    onClick={handleSubheadClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Divider</ToolLabel>
                <ToggleSwitch
                    title="display Divider"
                    onClick={handleDividerClick}
                    checked={true}
                />
            </Tool>
        </Toolbar>
    );
};

export const template = ({
    dir = "ltr",
    hasSubhead = true,
    hasDivider = true,
}) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const leftPadding =
        dir === "ltr" ? "padding: 8px 0px 0 20px;" : "padding: 8px 20px 0 0px;";
    const rightPadding =
        dir === "ltr" ? "padding: 8px 20px 0 0px;" : "padding: 8px 0px 0 20px;";
    const leftAlign = dir === "ltr" ? "left" : "right";
    const rightAlign = dir === "ltr" ? "right" : "left";
    const div = "border-bottom: 1px solid #000000;";
    const divider = hasDivider ? div : "";

    const sh = /* html */ ` <tr>
                            <td
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    border-bottom: 1px solid #000000;
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
                                ${content.subhead}
                            </td>
                        </tr>


    `;

    const subhead = hasSubhead ? sh : "";

    return /* html */ `
                <table
                    dir="${dir}"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                        background-color: #ffffff;
                        vertical-align: top;
     ${divider}"

                    width="100%"
                >
                    <tbody>


                                ${subhead}


                        <!-- survey buttons -->
                        <tr>
                            <td
                                bgcolor="#FFFFFF"
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    padding: 20px 20px 0px 20px;
                                    line-height: 20px;
                                    font-size: 16px;
                                    font-weight: 400;
                                    font-family: forma-djr-micro, Montserrat,
                                        Helvetica, 'Helvetica Neue', Arial,
                                        Roboto, sans-serif;
                                "
                            >
                                <table
                                    align="center"
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                >
                                    <tbody>
                                        <tr>
                                            <!-- button -->
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    1
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <!-- button -->
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    2
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    3
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    4
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    5
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    6
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    7
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    8
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    9
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td
                                                style="padding: 2px"
                                                width="8%"
                                                class="mobile-survey-opt"
                                            >
                                                <table
                                                    border="0"
                                                    align="center"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                        background-color: #ffffff;
                                                        vertical-align: top;
                                                        border: 1px solid
                                                            #e6e6e6;
                                                    "
                                                    width="100%"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                align="center"
                                                                valign="middle"
                                                                bgcolor="#ffffff"
                                                                style="
                                                                    mso-line-height-rule: exactly;
                                                                    mso-padding-alt: 10px;
                                                                    background: #ffffff;
                                                                    color: #000000;
                                                                    padding: 0px;
                                                                    line-height: 20px;
                                                                    font-size: 16px;
                                                                    font-weight: 400;
                                                                    font-family: forma-djr-micro,
                                                                        Montserrat,
                                                                        Helvetica,
                                                                        'Helvetica Neue',
                                                                        Arial,
                                                                        Roboto,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <a
                                                                    href="https://example.com"
                                                                    style="
                                                                        display: inline-block;
                                                                        background: #ffffff;
                                                                        color: #000000;
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
                                                                        padding: 8px
                                                                            0px;
                                                                        mso-padding-alt: 0px;
                                                                    "
                                                                    target="_blank"
                                                                >
                                                                    10
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
                        <!-- range - not likely -> extremely likely -->
                        <tr>
                            <td
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    padding: 0px;
                                    line-height: 20px;
                                    font-size: 16px;
                                    font-weight: 400;
                                    font-family: forma-djr-display, Montserrat,
                                        Helvetica, 'Helvetica Neue', Arial,
                                        Roboto, sans-serif;
                                "
                            >
                                <table
                                    dir="${dir}"
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
                                                style="
                                                    display: inline-block;
                                                    background-color: #ffffff;
                                                    color: #000000;
                                                    box-sizing: border-box;
                                                    mso-line-height-rule: exactly;
                                                    ${leftPadding}
                                                    line-height: 16px;
                                                    font-size: 12px;
                                                    font-weight: 400;
                                                    font-family: forma-djr-display,
                                                        Montserrat, Helvetica,
                                                        'Helvetica Neue', Arial,
                                                        Roboto, sans-serif;
                                                "
                                                align="${leftAlign}"
                                                width="50%"
                                            >
                                                ${content.notLikely}
                                            </td>
                                            <td
                                                style="
                                                    display: inline-block;
                                                    background-color: #ffffff;
                                                    color: #000000;
                                                    box-sizing: border-box;
                                                    mso-line-height-rule: exactly;
                                                    ${rightPadding}
                                                    line-height: 16px;
                                                    font-size: 12px;
                                                    font-weight: 400;
                                                    font-family: forma-djr-display,
                                                        Montserrat, Helvetica,
                                                        'Helvetica Neue', Arial,
                                                        Roboto, sans-serif;
                                                "
                                                align="${rightAlign}"
                                                width="50%"
                                            >
                                                ${content.extremelyLikely}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <!-- take survey CTA -->
                        <tr>
                            <td
                                bgcolor="#FFFFFF"
                                style="
                                    background-color: #ffffff;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    padding: 20px 20px 20px 20px;
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
                                        width: 100%;
                                    "
                                    width="122"
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
                                                    href="https://example.com"
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
                    </tbody>
                </table>
    `;
};

import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    headline: "Lorem ipsum dolor sit.",
    intro: `Lorem ipsum dolor sit amet consectet, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.`,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor
    in.Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in.`,
};

export const rtlContent = {
    headline: "هذه الأفكار المغلوطة ح",
    intro: "فلا أحد يرفض أو يكره أو يتجنب الش.",
    body: `لي الجانب الآخر نشجب ونستنكر
    هؤلاء الرجال المفتونون بنشوة
    اللحظة الهائمون في رغباتهم فلا
    يدركون ما يعقبها من الألم والأسي
    المحتم، واللوم كذلك يشمل هؤلاء
    الذين أخفقوا في واجباتهم نتيجة
    لضعف إرادتهم فيتساوي مع هؤلاء
    الذين يتجنبون وينأون عن تحمل
    الكدح والألم . لي الجانب الآخر نشجب ونستنكر
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

const Footer = ({
    dir = "ltr",
    hasSocial = true,
    hasHeadline = true,
    hasDisclaimer = true,
    hasMiddleBlock = true,
}) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    hasSocial,
                    hasHeadline,
                    hasDisclaimer,
                    hasMiddleBlock,
                }),
            )}
        </ModuleContainer>
    );
};

export default Footer;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasSocial: true,
        hasDisclaimer: true,
        content: ltrContent,
        hasHeadline: true,
        hasMiddleBlock: true,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const footer = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...footer,
            };
            setFeatures(prev => ({ ...prev, footer: state }));
            return state;
        });
    };
    const handleDisplaySocialClick = e => {
        const checked = e.target.checked;
        const footer = {
            hasSocial: checked,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...footer,
            };
            setFeatures(prev => ({ ...prev, footer: state }));
            return state;
        });
    };
    const handleDisplayDisclaimerClick = e => {
        const checked = e.target.checked;
        const footer = {
            hasDisclaimer: checked,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...footer,
            };
            setFeatures(prev => ({ ...prev, footer: state }));
            return state;
        });
    };
    const handleDisplayHeadlineClick = e => {
        const checked = e.target.checked;
        const footer = {
            hasHeadline: checked,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...footer,
            };
            setFeatures(prev => ({ ...prev, footer: state }));
            return state;
        });
    };
    const handleMiddleBlockClick = e => {
        const checked = e.target.checked;
        const footer = {
            hasMiddleBlock: checked,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...footer,
            };
            setFeatures(prev => ({ ...prev, footer: state }));
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
                <ToolLabel>Display Disclaimer</ToolLabel>
                <ToggleSwitch
                    title="Display disclaimer"
                    onClick={handleDisplayDisclaimerClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Middle Block</ToolLabel>
                <ToggleSwitch
                    title="Display middle block"
                    onClick={handleMiddleBlockClick}
                    checked={true}
                />
            </Tool>
            {state.hasMiddleBlock ? (
                <>
                    <Tool>
                        <ToolLabel>Display Social</ToolLabel>
                        <ToggleSwitch
                            title="Display social media links"
                            onClick={handleDisplaySocialClick}
                            checked={true}
                        />
                    </Tool>
                    <Tool>
                        <ToolLabel>Display Headline</ToolLabel>
                        <ToggleSwitch
                            title="Display headline"
                            onClick={handleDisplayHeadlineClick}
                            checked={true}
                        />
                    </Tool>
                </>
            ) : (
                ""
            )}
        </Toolbar>
    );
};

export const template = ({
    dir = "ltr",
    hasSocial = true,
    hasDisclaimer = true,
    hasHeadline = true,
    hasMiddleBlock = true,
}) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const disclaimer = ` <tr>
    <td
        style="
            color: #949287;
            line-height: 16px;
            font-size: 12px;
            font-weight: 400;
            font-family: forma-djr-micro, Montserrat,
                Helvetica, Helvetica Neue, Arial, Roboto,
                sans-serif;
            padding: 16px 20px;
        "
    >
        ${content.intro}
        <br />&nbsp;<br />
        ${content.body}
    </td>
</tr>`;
    const hl = `${content.headline}`;
    const soc = `
<td
    style="
        width: 100px;
        vertical-align: top;
    "
    width="100"
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
                    padding-top: 8px;
                    line-height: 16px;
                    font-size: 12px;
                    font-weight: 400;
                    font-family: forma-djr-micro,
                        Montserrat,
                        Helvetica,
                        Helvetica Neue,
                        Arial, Roboto,
                        sans-serif;
                "
            >
                <a
                    href="http://youtube.com?utm_content=footer"
                    style="
                        color: #949287;
                        text-decoration: none;
                    "
                    >YouTube</a
                >
            </td>
        </tr>
        <tr>
            <td
                style="
                    padding-top: 8px;
                    line-height: 16px;
                    font-size: 12px;
                    font-weight: 400;
                    font-family: forma-djr-micro,
                        Montserrat,
                        Helvetica,
                        Helvetica Neue,
                        Arial, Roboto,
                        sans-serif;
                "
            >
                <a
                    href="http://facebook.com?utm_content=footer"
                    style="
                        color: #949287;
                        text-decoration: none;
                    "
                    >Facebook</a
                >
            </td>
        </tr>
        <tr>
            <td
                style="
                    padding-top: 8px;
                    line-height: 16px;
                    font-size: 12px;
                    font-weight: 400;
                    font-family: forma-djr-micro,
                        Montserrat,
                        Helvetica,
                        Helvetica Neue,
                        Arial, Roboto,
                        sans-serif;
                "
            >
                <a
                    href="http://instagram.com?utm_content=footer"
                    style="
                        color: #949287;
                        text-decoration: none;
                    "
                    >Instagram</a
                >
            </td>
        </tr>
        <tr>
            <td
                style="
                    padding-top: 8px;
                    line-height: 16px;
                    font-size: 12px;
                    font-weight: 400;
                    font-family: forma-djr-micro,
                        Montserrat,
                        Helvetica,
                        Helvetica Neue,
                        Arial, Roboto,
                        sans-serif;
                "
            >
                <a
                    href="http://twitter.com?utm_content=footer"
                    style="
                        color: #949287;
                        text-decoration: none;
                    "
                    >Twitter</a
                >
            </td>
        </tr>
        <tr>
            <td
                style="
                    padding-top: 8px;
                    line-height: 16px;
                    font-size: 12px;
                    font-weight: 400;
                    font-family: forma-djr-micro,
                        Montserrat,
                        Helvetica,
                        Helvetica Neue,
                        Arial, Roboto,
                        sans-serif;
                "
            >
                <a
                    href="http://linkedin.com?utm_content=footer"
                    style="
                        color: #949287;
                        text-decoration: none;
                    "
                    >LinkedIn</a
                >
            </td>
        </tr>
    </table>
</td>`;

    const social = hasSocial ? soc : "";
    const headline = hasHeadline ? hl : "";
    const disclaimerCopy = hasDisclaimer ? disclaimer : "";

    const mb = `
    <tr>
    <td
        style="
            border-bottom: 1px solid #949287;
            padding: 24px 0 24px 20px;
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
    color: #949287;
    line-height: 28px;
    font-size: 24px;
    font-weight: 400;
    font-family: forma-djr-micro,
        Montserrat, Helvetica,
        Helvetica Neue, Arial, Roboto,
        sans-serif;
    padding-right: 32px;
    vertical-align: top;
"
>
${headline}
</td>
                <td
                    style="
                        width: 100px;
                        vertical-align: top;
                    "
                    width="100"
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
                                    padding-top: 8px;
                                    line-height: 16px;
                                    font-size: 12px;
                                    font-weight: 400;
                                    font-family: forma-djr-micro,
                                        Montserrat,
                                        Helvetica,
                                        Helvetica Neue,
                                        Arial, Roboto,
                                        sans-serif;
                                "
                            >
                                <a
                                    href="http://example.com/home?utm_content=footer"
                                    style="
                                        color: #949287;
                                        text-decoration: none;
                                    "
                                    >Home</a
                                >
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="
                                    padding-top: 8px;
                                    line-height: 16px;
                                    font-size: 12px;
                                    font-weight: 400;
                                    font-family: forma-djr-micro,
                                        Montserrat,
                                        Helvetica,
                                        Helvetica Neue,
                                        Arial, Roboto,
                                        sans-serif;
                                "
                            >
                                <a
                                    href="http://example.com/shop?utm_content=footer"
                                    style="
                                        color: #949287;
                                        text-decoration: none;
                                    "
                                    >Shop</a
                                >
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="
                                    padding-top: 8px;
                                    line-height: 16px;
                                    font-size: 12px;
                                    font-weight: 400;
                                    font-family: forma-djr-micro,
                                        Montserrat,
                                        Helvetica,
                                        Helvetica Neue,
                                        Arial, Roboto,
                                        sans-serif;
                                "
                            >
                                <a
                                    href="http://example.com/know?utm_content=footer"
                                    style="
                                        color: #949287;
                                        text-decoration: none;
                                    "
                                    >Know</a
                                >
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="
                                    padding-top: 8px;
                                    line-height: 16px;
                                    font-size: 12px;
                                    font-weight: 400;
                                    font-family: forma-djr-micro,
                                        Montserrat,
                                        Helvetica,
                                        Helvetica Neue,
                                        Arial, Roboto,
                                        sans-serif;
                                "
                            >
                                <a
                                    href="http://example.com/contact?utm_content=footer"
                                    style="
                                        color: #949287;
                                        text-decoration: none;
                                    "
                                    >Contact</a
                                >
                            </td>
                        </tr>
                    </table>
                </td>
                ${social}
            </tr>
        </table>
    </td>
</tr>
    `;

    const middleBlock = hasMiddleBlock ? mb : "";

    return `
<table
    dir="${dir}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #ffffff; vertical-align: top"
    width="100%"
>
  <tr>
                    <td
                      style="
                        border-bottom: 1px solid #949287;
                        padding: 16px 20px;
                      "
                    >
                      <table width="32" style="width: 32px">
                        <tbody>
                          <tr>
                            <td>
                              <a
                                href="https://example.com?utm_content=logo"
                                style="text-decoration: none"
                              >
                                <img
                                  alt=""
                                  src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/hp-logo-grey%402x.png"
                                  width="32"
                                  height="32"
                                  style="display: block"
                                />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
   ${middleBlock}
   ${disclaimerCopy}
</table>`;
};

import source from "./index.html";
import parse from "html-react-parser";
import ModuleContainer from "../ModuleContainer";
import React from "react";

import { colorWays } from "../../../lib/colors";

const ColorTintTest = () => {
    return <ModuleContainer>{parse(template())}</ModuleContainer>;
};

export const template = () => {
    const { blue, lavender, green, purple, pink } = colorWays;

    const neutral = `
<!-- white -->
<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #e6e7e8; vertical-align: top"
    width="100%"
>
    <tbody>
        <tr>
            <td
                bgcolor="#e6e7e8"
                style="
                    border-right: 1px solid #000000;
                    padding: 8px;
                    font-size: 0px;
                    word-break: break-word;
                "
            >
                <div style="height: 50px; line-height: 50px">
                    &#8202;
                </div>
            </td>
            <td
                bgcolor="#e6e7e8"
                width="58"
                style="
                    background-color: #e6e7e8;
                    padding: 8px;
                    width: 42px;
                "
            >
                <img
                    src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/HPR_Black.png"
                    width="42"
                    height="42"
                />
            </td>
        </tr>
    </tbody>
</table>

<!-- spacer -->
<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="vertical-align: top; background-color: #f0f0f0"
    width="100%"
>
    <tbody>
        <tr>
            <td style="font-size: 0px; word-break: break-word">
                <div style="height: 50px; line-height: 50px">
                    &#8202;
                </div>
            </td>
        </tr>
    </tbody>
</table>
<!-- end spacer -->

<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #ffffff; vertical-align: top"
    width="100%"
>
    <tbody>
        <tr>
            <td
                align="left"
                bgcolor="#ffffff"
                style="
                    background-color: #ffffff;
                    color: #000000;
                    border-bottom: 1px solid #000000;
                    mso-line-height-rule: exactly;
                    padding: 10px 20px;
                    line-height: 44px;
                    font-size: 44px;
                    font-weight: 400;
                    font-family: forma-djr-display, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                "
            >
                Headline
            </td>
        </tr>
        <tr>
            <td
                bgcolor="#fffff"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    background-color: #ffffff;
                    padding: 10px 20px;
                    line-height: 28px;
                    font-size: 24px;
                    font-weight: 400;
                    font-family: forma-djr-micro, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                "
            >
                Subhead
            </td>
        </tr>
        <tr>
            <td
                align="left"
                bgcolor="#E2BBFB"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    background-color: #ffffff;
                    padding: 10px 20px;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: forma-djr-micro, Montserrat,
                        Helvetica, Helvetica Neue, Arial, Roboto,
                        sans-serif;
                "
            >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </td>
        </tr>
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
                                    Button
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

<!-- spacer -->
<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="vertical-align: top; background-color: #f0f0f0"
    width="100%"
>
    <tbody>
        <tr>
            <td style="font-size: 0px; word-break: break-word">
                <div style="height: 50px; line-height: 50px">
                    &#8202;
                </div>
            </td>
        </tr>
    </tbody>
</table>
<!-- end spacer -->
<!-- end white -->
`;

    const doColorWay = colors => {
        const [one, two, three, four] = colors;
        return `
<!-- color -->
<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: ${one}; vertical-align: top"
    width="100%"
>
    <tbody>
        <tr>
            <td
                bgcolor="${one}"
                style="
                    background-color: ${one};
                    padding: 8px;
                    font-size: 0px;
                    word-break: break-word;
                "
            >
                <div style="height: 50px; line-height: 50px">
                    &#8202;
                </div>
            </td>
            <td
                bgcolor="${two}"
                width="58"
                style="
                    background-color: ${two};
                    padding: 8px;
                    width: 42px;
                "
            >
                <img
                    src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/HPR_Black.png"
                    width="42"
                    height="42"
                />
            </td>
        </tr>
    </tbody>
</table>

<!-- spacer -->
<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="vertical-align: top; background-color: #f0f0f0"
    width="100%"
>
    <tbody>
        <tr>
            <td style="font-size: 0px; word-break: break-word">
                <div style="height: 50px; line-height: 50px">
                    &#8202;
                </div>
            </td>
        </tr>
    </tbody>
</table>
<!-- end spacer -->

<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #ffffff; vertical-align: top"
    width="100%"
>
    <tbody>
        <tr>
            <td
                align="left"
                bgcolor="${two}"
                style="
                    background-color: ${two};
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 10px 20px;
                    line-height: 44px;
                    font-size: 44px;
                    font-weight: 400;
                    font-family: forma-djr-display, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                "
            >
                Headline
            </td>
        </tr>
        <tr>
            <td
                bgcolor="${three}"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    background-color: ${three};
                    padding: 10px 20px;
                    line-height: 28px;
                    font-size: 24px;
                    font-weight: 400;
                    font-family: forma-djr-micro, Montserrat,
                        Helvetica, 'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                "
            >
                Subhead
            </td>
        </tr>
        <tr>
            <td
                align="left"
                bgcolor="${four}"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    background-color: ${four};
                    padding: 10px 20px;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: forma-djr-micro, Montserrat,
                        Helvetica, Helvetica Neue, Arial, Roboto,
                        sans-serif;
                "
            >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </td>
        </tr>
        <tr>
            <td
                bgcolor="${four}"
                style="
                    background-color: ${four};
                    color: #000000;
                    mso-line-height-rule: exactly;
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
                                    Button
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

<!-- spacer -->
<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="vertical-align: top; background-color: #f0f0f0"
    width="100%"
>
    <tbody>
        <tr>
            <td style="font-size: 0px; word-break: break-word">
                <div style="height: 50px; line-height: 50px">
                    &#8202;
                </div>
            </td>
        </tr>
    </tbody>
</table>
<!-- end spacer -->
<!-- End color -->`;
    };

    const colorBlocks = [blue, lavender, green, purple, pink].map(colors =>
        doColorWay(colors),
    );

    return [neutral].concat(colorBlocks).join("");
};

export default ColorTintTest;

export const html = source;

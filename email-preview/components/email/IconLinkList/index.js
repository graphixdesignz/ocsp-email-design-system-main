import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import RadioButton from "../../RadioButton";
import ModuleContainer from "../ModuleContainer";

import { colorWays } from "../../../lib/colors";

export const ltrContent = {
    ctaLabel: `Link`,
};

export const rtlContent = {
    ctaLabel: "عرض",
};

const IconLinkList = ({
    dir = "ltr",
    hasDivider = true,
    hasOne = false,
    hasTwo = false,
    hasThree = true,
    colors = [],
}) => {
    return (
        <ModuleContainer>
            {parse(
                template({ dir, hasDivider, hasOne, hasTwo, hasThree, colors }),
            )}
        </ModuleContainer>
    );
};

export default IconLinkList;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: true,
        hasOne: false,
        hasTwo: false,
        hasThree: true,
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const iconLinkList = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...iconLinkList,
            };
            setFeatures(prev => ({ ...prev, iconLinkList: state }));
            return state;
        });
    };
    const handleOnrClick = e => {
        const checked = e.target.checked;
        const iconLinkList = {
            ...state,
            hasOne: checked,
            hasTwo: !checked,
            hasThree: !checked,
        };
        setState(iconLinkList);
        setFeatures(prev => ({ ...prev, iconLinkList }));
    };
    const handleTwoClick = e => {
        const checked = e.target.checked;
        const iconLinkList = {
            ...state,
            hasOne: !checked,
            hasTwo: checked,
            hasThree: !checked,
        };
        setState(iconLinkList);
        setFeatures(prev => ({ ...prev, iconLinkList }));
    };
    const handleThreeClick = e => {
        const checked = e.target.checked;
        const iconLinkList = {
            ...state,
            hasOne: !checked,
            hasTwo: !checked,
            hasThree: checked,
        };
        setState(iconLinkList);
        setFeatures(prev => ({ ...prev, iconLinkList }));
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const iconLinkList = {
            ...state,
            hasDivider: checked,
        };
        setState(iconLinkList);
        setFeatures(prev => ({ ...prev, iconLinkList }));
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
                <ToolLabel>Display One Link</ToolLabel>
                <RadioButton
                    name="links"
                    title="Displan One Link"
                    onClick={handleOnrClick}
                    checked={false}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Two Links</ToolLabel>
                <RadioButton
                    name="links"
                    title="Display Two Links"
                    onClick={handleTwoClick}
                    checked={false}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Three Links</ToolLabel>
                <RadioButton
                    name="links"
                    title="Display Three Links"
                    onClick={handleThreeClick}
                    checked={true}
                />
            </Tool>
        </Toolbar>
    );
};

export const template = ({
    dir = "ltr",
    hasOne = false,
    hasTwo = false,
    hasThree = true,
    hasDivider = true,
    colors = [],
}) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const { white } = colorWays;

    // module uses with last tint.
    const [, , , primary] = colors.length ? colors : white;

    const link = (align = "left") => `
<table
    dir="${dir}"
    align="${align}"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="
        background-color: ${primary};
        vertical-align: top;
    "
>
    <tbody>
        <tr>
            <td
                align="center"
                valign="middle"
                width="24"
                style="
                    width: 24px;
                    line-height: 0px;
                    vertical-align: middle;
                "
            >
                <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    width="24"
                    height="24"
                    style="
                        vertical-align: top;
                        width: 24px;
                        height: 24px;
                    "
                >
                    <tr>
                        <td>
                            <img
                                src="https://eroi-s3.s3.amazonaws.com/hp/InstantInk_Email_09-2022/Account_Person_Icon.png"
                                alt="Person Icon. Account."
                                valign="middle"
                                style="
                                    border: 0;
                                    display: block;
                                    outline: none;
                                    text-decoration: none;
                                    width: 24px;
                                    height: 24px;
                                    line-height: 24px;
                                    mso-line-height-rule: exactly;
                                    vertical-align: middle;
                                "
                                width="24"
                                height="24"
                            />
                        </td>
                    </tr>
                </table>
            </td>
            <td
                valign="middle"
                style="
                    color: #000000;
                    padding-top: 0px;
                    padding-right: 8px;
                    padding-bottom: 0px;
                    padding-left: 8px;
                    line-height: 24px;
                    mso-line-height-rule: exactly;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: forma-djr-display,
                        Montserrat, Helvetica,
                        'Helvetica Neue', Arial,
                        Roboto, sans-serif;
                "
            >
                <a
                    href="https://example.com?utm_content=footer"
                    style="
                        color: #000000;
                        text-decoration: underline;
                    "
                    >${content.ctaLabel}</a
                >
            </td>
        </tr>
    </tbody>
</table>`;

    const div = `border-bottom: 1px solid #000000;`;
    const divider = hasDivider ? div : "";

    return `
<table
    dir="ltr"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="
        background-color: ${primary};
        vertical-align: top;
        ${divider}
    "
    width="100%"
>
    <tbody>
        <tr>
            <td
                align="left"
                bgcolor="${primary}"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    background-color: ${primary};
                    padding-left: 20px;
                    padding-top: 20px;
                    padding-bottom: 20px;">
                ${link("left")}
            </td>
            ${
                hasTwo || hasThree
                    ? `<td
            align="center"
            bgcolor="${primary}"
            style="
                ${hasTwo && "width: 50%;"}
                color: #000000;
                mso-line-height-rule: exactly;
                background-color: ${primary};
                ${hasTwo ? "padding-left: 20px;" : "padding-right: 20px;"}
                padding-top: 20px;
                padding-bottom: 20px;">
            ${link(hasTwo ? "left" : "center")}
        </td>`
                    : ""
            }

            ${
                hasThree
                    ? `

                    <td
                align="right"
                bgcolor="${primary}"
                style="
                    color: #000000;
                    mso-line-height-rule: exactly;
                    background-color: ${primary};
                    padding-top: 20px;
                    padding-right: 20px;
                    padding-bottom: 20px;">
                ${link("right")}
            </td>`
                    : ""
            }


        </tr>
    </tbody>
</table>`;
};

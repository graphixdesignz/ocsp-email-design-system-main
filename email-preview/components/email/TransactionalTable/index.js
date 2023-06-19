import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    subhead: "Subhead",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua.`,
    tableHead: `Bill name`,
    lineItem: `Line item`,
    fees1: `Taxes &amp; Fees (1)`,
    fees2: `Taxes &amp; Fees (2)`,
    total: `Total`,
    subTotal: `Subtotal`,
    ctaLabel: `Button`,
};

export const rtlContent = {
    subhead: "فلا أحد يرفض أو يكره أو يتجنب الش.",
    body: `لي الجانب الآخر نشجب ونستنكر
    هؤلاء الرجال المفتونون بنشوة
    اللحظة الهائمون في رغباتهم فلا
    يدركون ما يعقبها من الألم والأسي
    المحتم،`,
    tableHead: `مشروع القانون الحالي`,
    lineItem: `بند البند`,
    fees1: `والرسوم`,
    fees2: `والرسوم`,
    total: `مجموع`,
    subTotal: `مجموع`,
    ctaLabel: "عرض",
};

const Transactionaltable = ({
    dir = "ltr",
    hasDivider = false,
    hasSubhead = true,
    hasBody = true,
    hasButton = true,
    hasQuantity = true,
    hasPrice = true,
    hasSubtotal = true,
    hasFees1 = true,
    hasFees2 = true,
    hasTotal = true,
    content = ltrContent,
}) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    hasDivider,
                    hasSubhead,
                    hasBody,
                    hasButton,
                    hasQuantity,
                    hasPrice,
                    hasSubtotal,
                    hasFees1,
                    hasFees2,
                    hasTotal,
                    content,
                }),
            )}
        </ModuleContainer>
    );
};

export default Transactionaltable;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: false,
        hasSubhead: true,
        hasBody: true,
        hasButton: true,
        hasQuantity: true,
        hasPrice: true,
        hasSubtotal: true,
        hasFees1: true,
        hasFees2: true,
        hasTotal: true,
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            dir: checked ? "rtl" : "ltr",
            content: checked ? rtlContent : ltrContent,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...transactionaltable,
            };
            setFeatures(prev => ({ ...prev, transactionaltable: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasDivider: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
    };
    const handleSubheadClick = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasSubhead: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
    };
    const handleBodyClick = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasBody: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
    };
    const handleButtonClick = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasButton: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
    };
    const handleQuantityClick = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasQuantity: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
    };
    const handlePriceClick = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasPrice: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
    };
    const handleSubtotalClick = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasSubtotal: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
    };
    const handleFees1Click = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasFees1: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
    };
    const handleFees2Click = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasFees2: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
    };
    const handleTotalClick = e => {
        const checked = e.target.checked;
        const transactionaltable = {
            ...state,
            hasTotal: checked,
        };
        setState(transactionaltable);
        setFeatures(prev => ({ ...prev, transactionaltable }));
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
                    checked={state.hasDivider}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Subhead</ToolLabel>
                <ToggleSwitch
                    title="display subhead"
                    onClick={handleSubheadClick}
                    checked={state.hasSubhead}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Body</ToolLabel>
                <ToggleSwitch
                    title="display body"
                    onClick={handleBodyClick}
                    checked={state.hasBody}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display CTA</ToolLabel>
                <ToggleSwitch
                    title="display cta"
                    onClick={handleButtonClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Quantity</ToolLabel>
                <ToggleSwitch
                    title="display quantity"
                    onClick={handleQuantityClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Price</ToolLabel>
                <ToggleSwitch
                    title="display price"
                    onClick={handlePriceClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Subtotal</ToolLabel>
                <ToggleSwitch
                    title="display subtotal"
                    onClick={handleSubtotalClick}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Taxes &amp; Fees 1</ToolLabel>
                <ToggleSwitch
                    title="display taxes &amp; fees&#40; 1 &#41;"
                    onClick={handleFees1Click}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Taxes &amp; Fees 2</ToolLabel>
                <ToggleSwitch
                    title="display taxes &amp; fees&#40; 2 &#41;"
                    onClick={handleFees2Click}
                    checked={true}
                />
            </Tool>
            <Tool>
                <ToolLabel>Display Total</ToolLabel>
                <ToggleSwitch
                    title="display total"
                    onClick={handleTotalClick}
                    checked={true}
                />
            </Tool>
        </Toolbar>
    );
};

export const template = ({
    dir = "ltr",
    hasDivider = true,
    hasSubhead = true,
    hasBody = true,
    hasButton = true,
    hasQuantity = true,
    hasPrice = true,
    hasSubtotal = true,
    hasFees1 = true,
    hasFees2 = true,
    hasTotal = true,
}) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const sh = `<tr>
    <td
        bgcolor="#ffffff"
        style="
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: 20px;
            line-height: 28px;
            font-size: 24px;
            font-weight: 400;
            font-family: forma-djr-display, Montserrat,
                Helvetica, 'Helvetica Neue', Arial,
                Roboto, sans-serif;
        "
    >
        ${content.subhead}
    </td>
</tr>`;

    const bd = `
<tr>
    <td
        bgcolor="#ffffff"
        style="
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: ${hasSubhead ? `0px 20px 10px 20px` : `20px`};
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            font-family: forma-djr-micro, Montserrat,
                Helvetica, Helvetica Neue, Arial, Roboto,
                sans-serif;
        "
    >
        ${content.body}
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
</tr>`;
    const costAlign = dir === "ltr" ? "right" : "left";
    const itemPadding = dir === "ltr" ? "10px 0 10px 20px" : "10px 20px 10px 0";
    const pricePadding =
        dir === "ltr" ? "10px 20px 10px 0" : "10px 0 10px 20px";
    const feesTopBorder = hasSubtotal ? "" : "1px solid #000000";
    const fees2TopBorder = hasSubtotal || hasFees1 ? "" : "1px solid #000000";

    const quant = /* html */ `<td
    width="50%"
    align="${costAlign}"
    bgcolor="#ffffff"
    style="
        background-color: #ffffff;
        color: #000000;
        mso-line-height-rule: exactly;
        padding: 10px 20px 10px 20px;
        line-height: 20px;
        font-size: 16px;
        font-weight: 400;
        font-family: forma-djr-micro,
            Montserrat, Helvetica,
            Helvetica Neue, Arial,
            Roboto, sans-serif;
    "
>
    x1
</td>`;
    const quantity = hasQuantity ? quant : "";

    const pr = `<td
    width="50%"
    align="${costAlign}"
    bgcolor="#ffffff"
    style="
        background-color: #ffffff;
        color: #000000;
        mso-line-height-rule: exactly;
        padding: ${pricePadding};
        line-height: 20px;
        font-size: 16px;
        font-weight: 400;
        font-family: forma-djr-micro,
            Montserrat, Helvetica,
            Helvetica Neue, Arial,
            Roboto, sans-serif;
    "
>
    $0.00
</td>`;
    const price = hasPrice ? pr : "";

    const st = `
    <tr>
    <td
            colspan="2"
            bgcolor="#ffffff"
            style="
            background-color: #ffffff;
            border-top: 1px solid
                #000000;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: ${itemPadding};
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            font-family: forma-djr-micro,
                Montserrat, Helvetica,
                Helvetica Neue, Arial,
                Roboto, sans-serif;
        ">
            ${content.subTotal}
        </td>
         <td style="
         border-top: 1px solid #000000;" >
        <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="
            background-color: #ffffff;
            vertical-align: top;
        "
        width="100%">
            <tbody>
                <tr>

                ${price}
                </tr>
            </tbody>
        </table>
    </td>

        </tr> `;

    const f1 = `
    <tr>
    <td
        colspan="2"
        bgcolor="#ffffff"
        style="
            border-top: ${feesTopBorder}
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: ${itemPadding};
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            font-family: forma-djr-micro,
                Montserrat, Helvetica,
                Helvetica Neue, Arial,
                Roboto, sans-serif;
        "
    >
        ${content.fees1}
    </td>
   <td style="
         border-top: ${feesTopBorder}" >
        <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="
            background-color: #ffffff;
            vertical-align: top;
        "
        width="100%">
            <tbody>
                <tr>

                ${price}
                </tr>
            </tbody>
        </table>
    </td>
</tr>`;

    const f2 = `
    <tr>
    <td
        colspan="2"
        bgcolor="#ffffff"
        style="
            border-top: ${fees2TopBorder};
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: ${itemPadding};
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            font-family: forma-djr-micro,
                Montserrat, Helvetica,
                Helvetica Neue, Arial,
                Roboto, sans-serif;
        "
    >
        ${content.fees2}
    </td>
    <td style="
         border-top: ${fees2TopBorder};" >
        <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="
            background-color: #ffffff;
            vertical-align: top;
        "
        width="100%">
            <tbody>
                <tr>

                ${price}
                </tr>
            </tbody>
        </table>
    </td>
</tr>`;

    const tl = `

<tr>
    <td
        colspan="2"
        bgcolor="#ffffff"
        style="
            background-color: #ffffff;
            border-top: 1px solid
                #000000;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: ${itemPadding};
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            font-family: forma-djr-micro,
                Montserrat, Helvetica,
                Helvetica Neue, Arial,
                Roboto, sans-serif;
        "
    >
        ${content.total}
    </td>
    <td
        align="${costAlign}"
        bgcolor="#ffffff"
        style="
            background-color: #ffffff;
            border-top: 1px solid
                #000000;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: ${pricePadding};
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            font-family: forma-djr-micro,
                Montserrat, Helvetica,
                Helvetica Neue, Arial,
                Roboto, sans-serif;
        "
    >
        $0.00
    </td>
</tr>`;

    const item = `<tr>
    <td
        colspan="2"
        bgcolor="#ffffff"
        style="
            background-color: #ffffff;
            color: #000000;
            mso-line-height-rule: exactly;
            padding: ${dir === "ltr" ? `10px 0 10px 20px` : `10px 20px 10px 0`};
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            font-family: forma-djr-micro,
                Montserrat, Helvetica,
                Helvetica Neue, Arial,
                Roboto, sans-serif;
        "
    >
        ${content.lineItem}
    </td>
    <td>
        <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="
            background-color: #ffffff;
            vertical-align: top;
        "
        width="100%">
            <tbody>
                <tr>
                ${quantity}
                ${price}
                </tr>
            </tbody>
        </table>
    </td>
</tr>`;

    const div = " border-bottom: 1px solid #000000;";
    const divider = hasDivider ? div : "";
    const subhead = hasSubhead ? sh : "";
    const body = hasBody ? bd : "";
    const button = hasButton ? btn : "";
    const fees1 = hasFees1 ? f1 : "";
    const fees2 = hasFees2 ? f2 : "";
    const subTotal = hasSubtotal ? st : "";
    const total = hasTotal ? tl : "";

    return /* html */ `
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
        ${subhead}
        ${body}
        <tr>
            <td
                bgcolor="#ffffff"
                style="
                    background-color: #ffffff;
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding-top: 0px;
                    padding-right: 20px;
                    padding-left: 20px;
                    padding-bottom: ${hasButton ? "0px" : "20px"};
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: forma-djr-micro, Montserrat,
                        Helvetica, Helvetica Neue, Arial, Roboto,
                        sans-serif;
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
                                colspan="3"
                                bgcolor="#ffffff"
                                style="
                                    background-color: #ffffff;
                                    border-bottom: 1px solid
                                        #000000;
                                    color: #000000;
                                    mso-line-height-rule: exactly;
                                    padding: ${
                                        dir === "ltr"
                                            ? `10px 0 10px 20px`
                                            : `10px 20px 10px 0`
                                    };
                                    line-height: 20px;
                                    font-size: 16px;
                                    font-weight: 400;
                                    font-family: forma-djr-micro,
                                        Montserrat, Helvetica,
                                        Helvetica Neue, Arial,
                                        Roboto, sans-serif;
                                "
                            >
                                ${content.tableHead}
                            </td>
                        </tr>
                        ${item}
                        ${item}
                        ${item}
                        ${subTotal}
                        ${fees1}
                        ${fees2}
                        ${total}

                    </tbody>
                </table>
            </td>
        </tr>
        ${button}
    </tbody>
</table>`;
};

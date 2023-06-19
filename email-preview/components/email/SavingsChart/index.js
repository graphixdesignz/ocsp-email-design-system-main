import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

import { colorWays } from "../../../lib/colors";

export const ltrContent = {
    headline: "Headline",
    leftColumnTitle: "Dolor et",
    middleColumnTitle: "Set amut",
    rightColumnTitle: "Rivae nuet",
    leftCopy: "Lorem",
    middleCopy: "00",
    rightCopy: "$0.00",
};

export const rtlContent = {
    headline: "هذه الأفكار المغلوطة ح",
    leftColumnTitle: "الجانب الآخر",
    middleColumnTitle: "نستنك",
    rightColumnTitle: "اتهم فلا",
    leftCopy: "والأسي",
    middleCopy: "00",
    rightCopy: "$0.00",
};

const SavingsChart = ({ dir = "ltr", hasDivider = true, colors = [] }) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    hasDivider,
                    colors,
                }),
            )}
        </ModuleContainer>
    );
};

export default SavingsChart;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        hasDivider: true,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const savingschart = {
            dir: checked ? "rtl" : "ltr",
            content: checked ? rtlContent : ltrContent,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...savingschart,
            };
            setFeatures(prev => ({ ...prev, savingschart: state }));
            return state;
        });
    };
    const handleDividerClick = e => {
        const checked = e.target.checked;
        const savingschart = {
            ...state,
            hasDivider: checked,
        };
        setState(savingschart);
        setFeatures(prev => ({ ...prev, savingschart }));
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

export const template = ({ dir = "ltr", hasDivider = true, colors = [] }) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;

    const { grey } = colorWays;

    // skip first color - the OG primary.
    // module begins with first tint.
    const [, primary, secondary] = colors.length ? colors : grey;
    const div = "border-bottom: 1px solid #000000";
    const divider = hasDivider ? div : "";
    // inline dividers only appear in white / neutral color scheme
    const inlineDivider = colors.length ? "" : div;
    const sideBorder =
        dir === "ltr"
            ? "border-right: 1px solid black"
            : "border-left: 1px solid black";
    const leftColumnPadding =
        dir === "ltr"
            ? "padding: 8px 0px 8px 20px"
            : "padding: 8px 20px 8px 0px";
    const rightColumnPadding =
        dir === "ltr"
            ? "padding: 8px 0px 8px 20px"
            : "padding: 8px 20px 8px 0px";

    return /* html */ `
	<table
		dir="${dir}"
		border="0"
		cellpadding="0"
		cellspacing="0"
		role="presentation"
		style="background-color: #ffffff; vertical-align: top"
		width="100%"
  >
	<tbody>
	  <tr>
		<td>
		  <!-- Headline -->
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
					background-color: ${primary};
					${inlineDivider};
					color: #000000;
				    text-transform: uppercase;
					mso-line-height-rule: exactly;
					padding: 20px;
					line-height: 24px;
					font-size: 24px;
					font-weight: 400;
					font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;"
			  >
				${content.headline}
			  </td>
			</tr>
		  </table>
		  <!-- End Headline -->
		</td>
	  </tr>
	  <tr>
		<td>
		  <!-- Body -->
		  <table
			dir="${dir}"
			border="0"
			cellpadding="0"
			cellspacing="0"
			role="presentation"
			style="background-color: #ffffff; vertical-align: top;  ${divider}"
			width="100%"
		  >
			<tr>
			  <td
				style="
					vertical-align: text-top;
					background-color: ${secondary};
					color: #000000;
					border-collapse: collapse;
					mso-line-height-rule: exactly;
												${leftColumnPadding};
												${inlineDivider};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
												width: 200px;
											"
			  >
				${content.leftColumnTitle}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: ${secondary};
												${inlineDivider};
												color: #000000;
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												padding: 8px;
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
												width: 200px;
											"
			  >
				${content.middleColumnTitle}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: ${secondary};
												color: #000000;
												mso-line-height-rule: exactly;
												${rightColumnPadding};
												${inlineDivider};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
												width: 200px;
											"
			  >
				${content.rightColumnTitle}
			  </td>
			</tr>
			<tr
			  style="
				border-bottom: 1px solid black;
				border-collapse: collapse;
			  "
			>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												mso-border-bottom-alt: 1px solid black;
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												${leftColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.leftCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												mso-border-bottom-alt: 1px solid black;
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												padding: 8px;
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.middleCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												mso-border-bottom-alt: 1px solid black;
												mso-line-height-rule: exactly;
												${rightColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.rightCopy}
			  </td>
			</tr>
			<tr
			  style="
				border-bottom: 1px solid black;
				border-collapse: collapse;
				mso-border-bottom-alt: 1px solid black;
			  "
			>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												mso-border-bottom-alt: 1px solid black;
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												${leftColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.leftCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												mso-border-bottom-alt: 1px solid black;
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												padding: 8px;
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.middleCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												mso-border-bottom-alt: 1px solid black;
												mso-line-height-rule: exactly;
												${rightColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.rightCopy}
			  </td>
			</tr>
			<tr
			  style="
				border-bottom: 1px solid black;
				border-collapse: collapse;
			  "
			>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												mso-border-bottom-alt: 1px solid black;
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												${leftColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.leftCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												mso-border-bottom-alt: 1px solid black;
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												padding: 8px;
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.middleCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												mso-border-bottom-alt: 1px solid black;
												mso-line-height-rule: exactly;
												${rightColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.rightCopy}
			  </td>
			</tr>
			<tr
			  style="
				border-bottom: 1px solid black;
				border-collapse: collapse;
			  "
			>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												border-collapse: collapse;
												mso-border-bottom-alt: 1px solid black;
												mso-line-height-rule: exactly;
												${leftColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.leftCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												mso-border-bottom-alt: 1px solid black;
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												padding: 8px;
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.middleCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												mso-border-bottom-alt: 1px solid black;
												mso-line-height-rule: exactly;
												${rightColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.rightCopy}
			  </td>
			</tr>
			<tr>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												${leftColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.leftCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												${sideBorder};
												border-collapse: collapse;
												mso-line-height-rule: exactly;
												padding: 8px;
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.middleCopy}
			  </td>
			  <td
				style="
												vertical-align: text-top;
												background-color: #ffffff;
												color: #000000;
												mso-line-height-rule: exactly;
												${rightColumnPadding};
												line-height: 20px;
												font-size: 16px;
												font-weight: 400;
												font-family: forma-djr-display, Montserrat, Helvetica, 'Helvetica Neue', Arial, Roboto, sans-serif;
											"
			  >
				${content.rightCopy}
			  </td>
			</tr>
		  </table>
		  <!-- End Body-->
		</td>
	  </tr>
	</tbody>
  </table>
`;
};

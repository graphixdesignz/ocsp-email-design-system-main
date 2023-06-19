import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

export const ltrContent = {
    signIn: `Sign In`,
    webView: `Web View`,
};

export const rtlContent = {
    signIn: `فلا أحد يرفض`,
    webView: `ذه الأفكار`,
};

const HeaderSignIn = ({ dir = "ltr", content = ltrContent }) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    content,
                }),
            )}
        </ModuleContainer>
    );
};

export default HeaderSignIn;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
        content: ltrContent,
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const header = {
            dir: checked ? "rtl" : "ltr",
            content: checked ? rtlContent : ltrContent,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...header,
            };
            setFeatures(prev => ({ ...prev, header: state }));
            return state;
        });
    };
    return (
        <Toolbar>
            <Tool>
                <ToolLabel>Display RTL</ToolLabel>
                <ToggleSwitch title="display RTL" onClick={handleDirClick} />
            </Tool>
        </Toolbar>
    );
};

export const template = ({ dir = "ltr" }) => {
    const content = dir === "ltr" ? ltrContent : rtlContent;
    const linkAlign = dir === "ltr" ? "left" : "right";
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
        background-color: #ffffff;
        height: 48px;
        padding: ${dir === "ltr" ? `10px 0px 10px 20px` : `10px 20px 10px 0px`};
      "
    >
      <table
        dir="ltr"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        width="auto"
        style="
          vertical-align: top;
          color: #949287;
          mso-line-height-rule: exactly;
          line-height: 16px;
          font-size: 12px;
          font-weight: 400;
          text-align: ${linkAlign};
          text-decoration: underline;
          font-family: forma-djr-display, Montserrat, Helvetica,
            'Helvetica Neue', Arial, Roboto, sans-serif;
        "
      >
        <tbody>
          <tr>
            <td style="
            ${dir === "ltr" ? `padding: 0px 8px 0px 0px` : ``}">
              <a
                href="https://example.com"
                target="_blank"
                style="color: #949287"
                >${content.signIn}</a
              >
            </td>
            <td style="${dir === "ltr" ? `` : `padding: 0px 0px 0px 8px`}">
              <a
                href="https://example.com"
                target="_blank"
                style="color: #949287"
                >${content.webView}</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </td>
    <td style="background-color: #ffffff; width: 50%">
      <div>&nbsp;</div>
    </td>

    <td></td>
  </tr>
</table>


`;
};

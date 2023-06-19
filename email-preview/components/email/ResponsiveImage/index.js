import { useState, useContext } from "react";
import PreviewContext from "../../PreviewContext";
import parse from "html-react-parser";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../ModuleContainer";

const ResponsiveImage = ({ hasDivider = false, asBanner = false }) => {
    return (
        <ModuleContainer>
            {parse(template({ hasDivider, asBanner }))}
        </ModuleContainer>
    );
};

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        asBanner: false,
    });
    const handleDisplayAsBanner = e => {
        const checked = e.target.checked;
        const responsiveimage = {
            asBanner: checked,
        };
        setState(prev => {
            const state = {
                ...prev,
                ...responsiveimage,
            };
            setFeatures(prev => ({ ...prev, responsiveimage: state }));
            return state;
        });
    };
    return (
        <Toolbar>
            <Tool>
                <ToolLabel>Display as Banner</ToolLabel>
                <ToggleSwitch
                    title="display as a banner"
                    onClick={handleDisplayAsBanner}
                    checked={false}
                />
            </Tool>
        </Toolbar>
    );
};

export default ResponsiveImage;

export const template = ({ hasDivider = false, asBanner = false }) => {
    const div = ` border-bottom: 1px solid #000000;`;
    const divider = hasDivider ? div : "";

    const src = asBanner
        ? "https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/media/ImageModuleBanner.jpg"
        : "https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/media/ImageModule.jpg";

    return `
<table
    dir="ltr"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #ffffff; vertical-align: top;${divider}"
    width="100%"
>
    <tbody>
        <tr>
            <td
                bgcolor="#ffffff"
                style="
                    background-color: #ffffff;
                    color: #000000;
                    mso-line-height-rule: exactly;
                    padding: 0px;
                    line-height: 28px;
                    font-size: 24px;
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
                        border-collapse: collapse;
                        border-spacing: 0px;
                    "
                >
                    <tbody>
                        <tr>
                            <td style="width: 600px">
                                <a href="https://example.com?utm_content=image" style="text-decoration: none;">
                                    <img
                                        src="${src}"
                                        style="
                                            border: 0;
                                            display: block;
                                            outline: none;
                                            text-decoration: none;
                                            height: auto;
                                            width: 100%;
                                            font-size: 16px;
                                        "
                                        width="600"
                                        height="auto"
                                        alt="Image Description"
                                    />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>`;
};

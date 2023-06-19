import React from "react";
import source from "./index.html";
import parse from "html-react-parser";
import ModuleContainer from "../ModuleContainer";

import { white } from "../../../lib/colors";

const Spacer = ({ primary = white, height = "50px" }) => {
    return (
        <ModuleContainer>{parse(template(primary, height))}</ModuleContainer>
    );
};

export const template = (primary = "#ffffff", height = "50px") => `
<!-- spacer -->
<table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="vertical-align: top; background-color: ${primary}"
    width="100%"
>
    <tbody>
        <tr>
            <td style="font-size: 0px; word-break: break-word">
                <div style="height: ${height}; line-height: ${height}">&#8202;</div>
            </td>
        </tr>
    </tbody>
</table>
<!-- end spacer -->
`;

export default Spacer;

export const html = source;

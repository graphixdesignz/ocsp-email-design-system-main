import source from "./index.html";
import ModuleContainer from "../ModuleContainer";

import { brights } from "../../../lib/colors";

const ColorTest = () => {
    return (
        <ModuleContainer>
            {brights.map((color, i) => (
                <ColorBlock key={`color-${i}-${color}`} color={color} />
            ))}
        </ModuleContainer>
    );
};

const ColorBlock = ({ color }) => {
    return (
        <div
            className="mj-column-per-100 mj-outlook-group-fix"
            style={{
                fontSize: 0,
                textAlign: "left",
                direction: "ltr",
                display: "inline-block",
                verticalAlign: "top",
                width: "100%",
            }}>
            <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{
                    backgroundColor: color,
                    borderBottom: "1px solid black",
                    verticalAlign: "top",
                }}
                width="100%">
                <tbody>
                    <tr>
                        <td
                            align="left"
                            style={{
                                fontSize: 0,
                                padding: 20,
                                wordBreak: "break-word",
                            }}>
                            <div
                                style={{
                                    fontFamily:
                                        "forma-djr-micro, Helvetica, Helvetica Neue, Arial, Roboto, sans-serif",
                                    fontSize: "15px",
                                    lineHeight: "15px",
                                    textAlign: "left",
                                    color: "#000000",
                                }}>
                                Color: {color}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            align="left"
                            style={{
                                fontSize: 0,
                                padding: 20,
                                wordBreak: "break-word",
                            }}>
                            <div
                                style={{
                                    fontFamily:
                                        "forma-djr-micro, Helvetica, Helvetica Neue, Arial, Roboto, sans-serif",
                                    fontSize: "15px",
                                    lineHeight: "15px",
                                    textAlign: "left",
                                    color: "#ffffff",
                                }}>
                                Color: {color}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ColorTest;

export const html = source;

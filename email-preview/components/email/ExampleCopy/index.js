import source from "./index.html";
import ModuleContainer from "../ModuleContainer";

import { grey } from "../../../lib/colors";

const ExampleCopy = ({ colors = [grey] }) => {
    return (
        <ModuleContainer>
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
                        backgroundColor: colors[0],
                        border: "1px solid black",
                        verticalAlign: "top",
                    }}
                    width="100%">
                    <tbody>
                        <tr>
                            <td
                                align="left"
                                style={{
                                    fontSize: 0,
                                    padding: 30,
                                    wordBreak: "break-word",
                                }}>
                                <div
                                    style={{
                                        fontFamily:
                                            "forma-djr-display, Helvetica,Helvetica Neue, Arial, Roboto, sans-serif",
                                        fontSize: "80px",
                                        lineHeight: "80px",
                                        textAlign: "left",
                                        color: "#000000",
                                    }}>
                                    HP ENVY 34ʺ All-In-One
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    background: "#000000",
                                    fontSize: 0,
                                    wordBreak: "break-word",
                                }}>
                                <div style={{ height: 1, lineHeight: 1 }}>
                                     
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                align="left"
                                style={{
                                    fontSize: 0,
                                    padding: 30,
                                    wordBreak: "break-word",
                                }}>
                                <div
                                    style={{
                                        fontFamily:
                                            "forma-djr-display, Helvetica, Helvetica Neue, Arial, Roboto, sans-serif",
                                        fontSize: "40px",
                                        lineHeight: "40px",
                                        textAlign: "left",
                                        color: "#000000",
                                    }}>
                                    Nisi enim amet tempor aute do do eu sunt sit
                                    est adipisicing.
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                align="left"
                                style={{
                                    fontSize: 0,
                                    padding: "90px 0px 15px 15px",
                                    wordBreak: "break-word",
                                }}>
                                <table
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                        borderCollapse: "collapse",
                                        borderSpacing: 0,
                                    }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "80px" }}>
                                                <img
                                                    height={"80px"}
                                                    src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/HPR_Black.png"
                                                    style={{
                                                        border: 0,
                                                        display: "block",
                                                        outline: "none",
                                                        textDecoration: "none",
                                                        height: "80px",
                                                        width: "100%",
                                                        fontSize: 13,
                                                    }}
                                                    width={"80px"}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ModuleContainer>
    );
};

export default ExampleCopy;

export const html = source;

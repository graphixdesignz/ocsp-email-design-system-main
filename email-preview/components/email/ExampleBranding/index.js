import source from "./index.html";
import ModuleContainer from "../ModuleContainer";

const ExampleBranding = ({ colors = ["#FFBD3A", "#ffd175", "#ffde9d"] }) => {
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
                    style={{ verticalAlign: "top" }}
                    width="100%">
                    <tbody>
                        <tr>
                            <td
                                align="left"
                                style={{
                                    fontSize: 0,
                                    padding: 0,
                                    wordBreak: "break-word",
                                }}>
                                <table
                                    cellPadding={0}
                                    cellSpacing={0}
                                    width="100%"
                                    border={0}
                                    style={{
                                        color: "#000000",
                                        fontFamily:
                                            'forma-djr-micro, Helvetica, "Helvetica Neue", Arial, Roboto, sans-serif',
                                        fontSize: "13px",
                                        lineHeight: "22px",
                                        tableLayout: "auto",
                                        width: "100%",
                                        border: "none",
                                    }}>
                                    <tbody>
                                        <tr>
                                            <td
                                                valign="middle"
                                                align="left"
                                                bgcolor={colors[0]}
                                                style={{
                                                    verticalAlign: "middle",
                                                    padding: 15,
                                                    fontFamily:
                                                        'forma-djr-display, Helvetica, "Helvetica Neue", Arial, Roboto, sans-serif',
                                                    fontSize: "30px",
                                                    lineHeight: "30px",
                                                }}>
                                                Consectetur ullamco officia
                                            </td>
                                            <td
                                                valign="middle"
                                                align="left"
                                                bgcolor={colors[1]}
                                                style={{
                                                    verticalAlign: "middle",
                                                    padding: 15,
                                                    fontFamily:
                                                        'forma-djr-micro, Helvetica,"Helvetica Neue", Arial, Roboto, sans-serif',
                                                    fontSize: "15px",
                                                    lineHeight: "15px",
                                                }}>
                                                Irure exercitation duis
                                                consequat amet.
                                            </td>
                                            <td
                                                valign="middle"
                                                align="center"
                                                width={100}
                                                bgcolor={colors[2]}
                                                style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    padding: 15,
                                                }}>
                                                <img
                                                    src="https://eroi-s3.s3-us-west-2.amazonaws.com/hp/email-design-system/HPR_Black.png"
                                                    width={80}
                                                    height={80}
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

export default ExampleBranding;

export const html = source;

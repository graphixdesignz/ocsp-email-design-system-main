import { useState, useContext } from "react";
import parse from "html-react-parser";
import PreviewContext from "../../PreviewContext";
import Toolbar, { Tool, ToolLabel } from "../../Toolbar";
import ToggleSwitch from "../../ToggleSwitch";
import ModuleContainer from "../../email/ModuleContainer";

import { template as headerTemplate } from "../../email/HeaderSignIn";
import { template as signifierTemplate } from "../../email/Signifier";
import { template as overheadHeadlineTemplate } from "../../email/OverheadHeadline";
import { template as responsiveImageTemplate } from "../../email/ResponsiveImage";
import { template as transactionalTableTemplate } from "../../email/TransactionalTable";
import { template as thirdsImageTemplate } from "../../email/ThirdsImage";
import { template as iconLinkListTemplate } from "../../email/IconLinkList";
import { template as footerTemplate } from "../../email/Footer";

const CoBrandConfirmationOrderDetailed = ({ dir = "ltr", colors = [] }) => {
    return (
        <ModuleContainer>
            {parse(
                template({
                    dir,
                    colors,
                }),
            )}
        </ModuleContainer>
    );
};

export default CoBrandConfirmationOrderDetailed;

export const Features = () => {
    const { setFeatures } = useContext(PreviewContext);
    const [state, setState] = useState({
        dir: "ltr",
    });
    const handleDirClick = e => {
        const checked = e.target.checked;
        const cobrandconfirmationorderdetailed = {
            dir: checked ? "rtl" : "ltr",
        };
        setState(prev => {
            const state = {
                ...prev,
                ...cobrandconfirmationorderdetailed,
            };
            setFeatures(prev => ({
                ...prev,
                cobrandconfirmationorderdetailed: state,
            }));
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

export const template = ({ dir = "ltr", colors = [] }) => {
    const props = { dir, colors };
    return [
        headerTemplate(props),
        signifierTemplate(props),
        overheadHeadlineTemplate({
            hasDivider: false,
            hasImage: false,
            hasTopSubhead: false,
            hasSubhead: false,
            colors: [],
            dir,
        }),
        responsiveImageTemplate({ ...props }),
        transactionalTableTemplate({
            hasDivider: true,
            hasButton: false,
            hasBody: false,
            ...props,
        }),
        thirdsImageTemplate({
            layout: ",tr",
            hasPrimary: false,
            ...props,
        }),
        thirdsImageTemplate({ layout: "rtl", hasPrimary: false, ...props }),
        iconLinkListTemplate({ dir }),
        footerTemplate(props),
    ].join("");
};

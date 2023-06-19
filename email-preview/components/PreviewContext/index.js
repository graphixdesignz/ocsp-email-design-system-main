import { createContext, useContext } from "react";
import Markup from "../Markup";

const defaultPreviewContext = {
    features: {},
    colors: [],
    colorFamily: "neutral",
    setFeatures: function (features) {},
    setColors: function ([], colorFamily = "") {},
};

const PreviewContext = createContext(defaultPreviewContext);

export default PreviewContext;

export const PreviewComponent = ({ label, Component }) => {
    const { features, colors } = useContext(PreviewContext);
    const feat = features[label] ?? {};
    const props = {
        ...feat,
        colors,
    };

    return <Component {...props} />;
};

export const PreviewMarkup = ({ label, template }) => {
    const { features, colors } = useContext(PreviewContext);
    const feat = features[label] ?? {};
    const props = {
        ...feat,
        colors,
    };
    return <Markup html={template(props)} />;
};

import { useEffect, useRef } from "react";

const Markup = ({ html }) => {
    const ref = useRef();
    useEffect(() => {
        if (window?.Prism) {
            window?.Prism.highlightAllUnder(ref.current);
        }
    }, [html]);
    return (
        <div ref={ref} className="remark-highlight">
            <pre className="language-html">
                <code className="language-html">{html}</code>
            </pre>
        </div>
    );
};

export default Markup;

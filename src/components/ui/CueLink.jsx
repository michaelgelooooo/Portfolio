import { Link } from "react-router-dom";

function CueLink({
    to,
    children,
    icon = "fa-arrow-down",
    iconPosition = "after",
    className = "",
}) {
    const isAnchor = to.startsWith("#");
    const isExternal = /^(https?:|mailto:)/.test(to);
 
    const classes = `text-violet-500 font-semibold hover:opacity-50 ${className}`;

    const content = (
        <>
            {iconPosition === "before" && <i className={`fas ${icon} me-1`}></i>}
            <span>{children}</span>
            {iconPosition === "after" && <i className={`fas ${icon} ms-1`}></i>}
        </>
    );

    // Same-page scroll (#about) or external link: plain <a>
    if (isAnchor || isExternal) {
        return (
            <a
                href={to}
                className={classes}
                {...(isExternal && { target: "_blank", rel: "noreferrer" })}
            >
                {content}
            </a>
        );
    }

    // Another page in the app: React Router, no full reload
    return (
        <Link to={to} className={classes}>
            {content}
        </Link>
    );
}

export default CueLink;
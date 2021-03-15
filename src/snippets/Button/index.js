/** PropTypes library external*/
import PropTypes from "prop-types";

/** cx library external */
import cx from "classnames";


const Button = ({
                    content = "No content",
                    color = "primary",
                    callback = undefined,
                    link = undefined,
                    target = undefined,
                    isSubmit = false,
                    fullWidth = false,
                    icon = undefined,
                }) => {

    const BUTTON_DEFAULT = `py-1.5 px-2.5 rounded-md shadow-sm font-medium focus:outline-none inline-flex items-center justify-center`;
    const COLOR_BG = `bg-${color}-50`;
    const COLOR_TXT = color === "primary" ? "text-gray-800" : "text-white";
    const WIDTH = fullWidth && "w-full";
    const HOVER = `hover:bg-${color}-100 hover:shadow`;
    const TRANSITION = `transition duration-300 ease-in-out`;

    const classNames = cx(
        BUTTON_DEFAULT,
        COLOR_BG,
        COLOR_TXT,
        WIDTH,
        HOVER,
        TRANSITION
    );

    const defaultRel = target === "_blank" ? "noopener" : undefined;

    return link ? (
        <a href={link} target={target} rel={defaultRel} className={classNames}>
            {content}
        </a>
    ) : (
        <button
            type={isSubmit ? "submit" : "button"}
            onClick={callback && (() => callback())}
            className={classNames}
        >
            {icon && <i>{icon}</i>}
            <span>{content}</span>
        </button>
    );
};

Button.displayName = "Button";

Button.propTypes = {
    /** Text to be displayed on the button. It's obligatory */
    content: PropTypes.string,

    /** The background color on the button.*/
    color: PropTypes.string,

    /** Action when executing button */
    callback: PropTypes.func,

    /** url Link target of the button */
    link: PropTypes.string,

    /** The target tag if a Link exists */
    target: PropTypes.string,

    /** true for submit button */
    isSubmit: PropTypes.bool,

    /** true for full width button */
    fullWidth: PropTypes.bool,

    /** Icon (SVG) to be displayed on the left side */
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default Button;

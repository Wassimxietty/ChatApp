import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";

import PropTypes from "prop-types";

ArrowIcon.propTypes = {
    expanded: PropTypes.bool.isRequired,
    className: PropTypes.string,
};


function ArrowIcon({ expanded, className }) {
    const iconClass = "text-accent text-opacity-80 my-auto mr-1";
    return expanded ? (
        <BsCaretDownFill size='14' className={`${iconClass} ${className}`} />
    ) : (
        <BsCaretRightFill size='14' className={`${iconClass} ${className}`} />
    );
}



export default ArrowIcon;

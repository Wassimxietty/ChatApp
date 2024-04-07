import ArrowIcon from "./icon";
import Channels from "./channels";
import PropTypes from "prop-types";
import { useState } from "react";


/** this code only to ignore the linter rules but basically it tells the linter what are the types (string or array or number....) for the props (categoryName, selections) and the isRequired method is just to tell it's really needed for the compenent */

Category.propTypes = {
    categoryName: PropTypes.string.isRequired,
    selections: PropTypes.array.isRequired,
};



/** here i moved the ArrowIcon to icon.jsx file and i grouped it the <a></a> tag in one wraper div also removed all className={expanded} cuz expanded is true false value not a string  */

/** and i moved the  () => setExpanded(!expanded)  to the wraper dic i told you about in prv cmnt*/


/** those are basically the big changes and just some small changes*/

function Category({ categoryName, selections }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex-col dropdown">
            <div className="flex cursor-pointer" onClick={() => setExpanded(!expanded)}>
                <ArrowIcon expanded={expanded} />
                <a href="#" className="font-bold"> {categoryName} </a>
            </div>
            <div >
                {expanded && selections.map((selection, index) => <Channels key={index} selection={selection} />)}
            </div>
        </div>
    )
}




export default Category;



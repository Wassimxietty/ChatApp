import PropTypes from "prop-types";


Channels.propTypes = {
    selection: PropTypes.string.isRequired,
};

function Channels({ selection }) {
    return (
        <>
            <div className="dropdown-selection">
                <h5 className='dropdown-selection-text'>{selection}</h5>
            </div>
        </>
    );
}


export default Channels;
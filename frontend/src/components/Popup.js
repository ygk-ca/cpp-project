import React from 'react'
import "../styles/Popup.css";

function Popup(props) {
    // Boolean trigger value passed through props to show popup
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>

                {/* Body of the details popup */}
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup
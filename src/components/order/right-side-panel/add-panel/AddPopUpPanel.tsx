import React from "react";

const AddPopUp: React.FC = (props) => {

    return (
        <div>
            <form className="pop-up-panel">
                <button className="add-document-button"><i className="fas fa-plus"/> Add</button>
            </form>
        </div>
    )
};

export default AddPopUp;

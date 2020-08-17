import React, { useState } from "react";
import './orderDetailsRightSide.css';
import AddPopUp from "./add-panel";

const OrderDetailsRightPanel: React.FC = (props) => {
    const [referenceAddIsShown, setReferenceAddIsShown] = useState(false);
    const [commentsAddIsShown, setCommentsAddIsShown] = useState(false);
    const [picturesAddIsShown, setPicturesAddIsShown] = useState(false);
    const [assignmentAddIsShown, setAssignmentAddIsShown] = useState(false);

    return (
        <div className="right-side-container">
            <div className={referenceAddIsShown ? "additional-info-container additional-info-container-open" : "additional-info-container"}>
                <h3><i className="far fa-folder"/> Reference
                    {
                        referenceAddIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setReferenceAddIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setReferenceAddIsShown(true)}/>
                    }
                </h3>
                { referenceAddIsShown && <AddPopUp/> }
            </div>
            <div className={commentsAddIsShown ? "additional-info-container additional-info-container-open" : "additional-info-container"}>
                <h3><i className="far fa-comment-alt"/> Comments
                    {
                        commentsAddIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setCommentsAddIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setCommentsAddIsShown(true)}/>
                    }
                </h3>
                { commentsAddIsShown && <AddPopUp/> }
            </div>
            <div className={picturesAddIsShown ? "additional-info-container additional-info-container-open" : "additional-info-container"}>
                <h3><i className="far fa-file-image"/> Pictures
                    {
                        picturesAddIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setPicturesAddIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setPicturesAddIsShown(true)}/>
                    }
                </h3>
                { picturesAddIsShown && <AddPopUp/> }
            </div>
            <div className={assignmentAddIsShown ? "additional-info-container additional-info-container-open" : "additional-info-container"}>
                <h3><i className="far fa-user"/> Assignment
                    {
                        assignmentAddIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setAssignmentAddIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setAssignmentAddIsShown(true)}/>
                    }
                </h3>
                { assignmentAddIsShown && <AddPopUp/> }
            </div>
        </div>
    )
};

export default OrderDetailsRightPanel;

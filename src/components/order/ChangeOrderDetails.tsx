import React from "react";
import './changeOrderDetails.css';
import OrderDetailsCenterPanel from "./center-panel";
import OrderDetailsRightPanel from "./right-side-panel";

const ChangeOrderDetails: React.FC = (props) => {
    return (
        <div className="wrapper">
            <OrderDetailsCenterPanel/>
            <OrderDetailsRightPanel/>
        </div>
    );
};

export default ChangeOrderDetails;

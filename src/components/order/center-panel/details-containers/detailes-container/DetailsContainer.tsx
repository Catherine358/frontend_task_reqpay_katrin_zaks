import React from "react";
import '../detailsContainer.css';
import Detail from "../detail";

interface DetailsContainerProps {
    data: {
        categories: string,
        status: string,
        statusChange: string,
        reason: string,
        modified: string
    }
}

const DetailsContainer: React.FC<DetailsContainerProps> = (props) => {
    const { data } = props;

    return (
        <div className="details-info-container">
            <Detail title="Categories" data={data.categories}/>
            <Detail title="Status" data={data.status} classname="approved"/>
            <Detail title="Status Change" data={data.statusChange}/>
            <Detail title="Reason" data={data.reason}/>
            <Detail title="Modified" data={data.modified}/>
        </div>
    );
};

export default DetailsContainer;

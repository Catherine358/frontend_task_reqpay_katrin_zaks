import React, { useState } from "react";
import '../detailsContainer.css';
import Detail from "../detail";
import DetailForm from "../detail-form";

interface ScheduleImpactContainerProps {
    data: {
        scheduleImpact: boolean,
        numberOfDays: number,
        costOfImpact: number
    },
    onUpdateDetailHandler: (newValue: string, infoToUpdate: string) => void
}

const ScheduleImpactContainer: React.FC<ScheduleImpactContainerProps> = (props) => {
    const { data } = props;

    const [formIsShown, setFormIsShown] = useState(false);
    const [infoToBeUpdated, setInfoToBeUpdated] = useState('');

    return (
        <div className="details-info-container">
            <Detail title="Schedule Impact" data={data.scheduleImpact}/>
            <Detail title="Number Of Days"
                    data={data.numberOfDays}
                    editable={true}
                    setFormIsShown={setFormIsShown}
                    setInfoToBeUpdated={setInfoToBeUpdated}
            />
            <Detail title="Cost Of Impact"
                    data={data.costOfImpact}
                    editable={true}
                    setFormIsShown={setFormIsShown}
                    setInfoToBeUpdated={setInfoToBeUpdated}
            />
            {
                formIsShown && <DetailForm title={infoToBeUpdated}
                                                 data={infoToBeUpdated === 'Number Of Days' ?
                                                     data.numberOfDays : data.costOfImpact}
                                                 onUpdateDetailHandler={props.onUpdateDetailHandler}
                                                 setFormIsShown={setFormIsShown}
                                                 infoToBeUpdated={infoToBeUpdated}
                />
            }
        </div>
    );
};

export default ScheduleImpactContainer;

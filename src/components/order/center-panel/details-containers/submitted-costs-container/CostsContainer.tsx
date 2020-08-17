import React, { useState } from "react";
import '../detailsContainer.css';
import Detail from "../detail";
import DetailForm from "../detail-form";

interface CostsContainerProps {
    typeOfCosts: string,
    data: {
        costs: number,
        date: string,
        insurance: number,
        bond: number,
        GC: number,
        GCAmount: number,
        totalCost: number
    },
    onUpdateDetailHandler: (newValue: string, infoToUpdate: string) => void
}

const CostsContainer: React.FC<CostsContainerProps> = (props) => {
    const { data, typeOfCosts } = props;

    const [formIsShown, setFormIsShown] = useState(false);
    const [infoToBeUpdated, setInfoToBeUpdated] = useState('');

    return (
        <div className="details-info-container">
            <Detail title={`${typeOfCosts} Costs`} data={data.costs}/>
            <Detail title={`Date ${typeOfCosts}`} data={data.date}/>
            <Detail title="Insurance"
                    data={data.insurance}
                    editable={true}
                    setFormIsShown={setFormIsShown}
                    setInfoToBeUpdated={setInfoToBeUpdated}
            />
            <Detail title="Bond" data={data.bond}/>
            <Detail title="GC %" data={data.GC}/>
            <Detail title="GC Amount" data={data.GCAmount}/>
            <Detail title={`Total ${typeOfCosts} Cost`} data={data.totalCost}/>
            {
                formIsShown && <DetailForm title={infoToBeUpdated}
                                                data={infoToBeUpdated === 'Insurance' ? data.insurance : ''}
                                                onUpdateDetailHandler={props.onUpdateDetailHandler}
                                                setFormIsShown={setFormIsShown}
                                                infoToBeUpdated={infoToBeUpdated}
                />
            }
        </div>
    );
};

export default CostsContainer;

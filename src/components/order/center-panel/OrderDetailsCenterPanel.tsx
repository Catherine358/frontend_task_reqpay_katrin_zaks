import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './orderDetailsCenter.css';
import { Order } from "../../../types/reducers-types";
import * as orderActions from '../../../store/actions/actions';
import { useTypedSelector } from "../../../store/store";

import GeneralInformationContainer from "./details-containers/general-info-container";
import DetailsContainer from "./details-containers/detailes-container";
import ScheduleImpactContainer from "./details-containers/schedule-impact-container";
import CostsContainer from "./details-containers/submitted-costs-container";
import { updateInformationDetail } from "../../../store/actions/actions";
import ErrorIndicator from "../../../error-indicator";

type StateProps = {
    order: Order,
    error: string
}

const OrderDetailsCenterPanel: React.FC = (props) => {
    const [generalInfoIsShown, setGeneralInfoIsShown] = useState(false);
    const [detailsIsShown, setDetailsIsShown] = useState(false);
    const [scheduleImpactIsShown, setScheduleImpactIsShown] = useState(false);
    const [submittedCostsIsShown, setSubmittedCostsIsShown] = useState(false);
    const [revisedCostsIsShown, setRevisedCostsIsShown] = useState(false);
    const [approvedCostsIsShown, setApprovedCostsIsShown] = useState(false);

    const orderState: StateProps = useTypedSelector(state => state.order);
    const order = orderState.order;
    const error = orderState.error;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderActions.fetchOrder(new Date().toString()));
    }, [dispatch]);

    const onUpdateDetailHandler = (pieceOfInfoToUpdate: string, pieceOfInfoToBeUpdated: string) => {
        dispatch(updateInformationDetail(parseInt(pieceOfInfoToUpdate), pieceOfInfoToBeUpdated));
    };

    if(error) {
        return (
            <div className="center-container">
                <div className="header-container">
                    <div>
                        <ErrorIndicator error={error}/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="center-container">
            <div className="header-container">
                <div>
                    <p><i className="fas fa-angle-left"/>Change Order Spreadsheet</p>
                    <h1>Details of Change Order XXX</h1>
                    <h2>CIM Steel & Kenitics</h2>
                </div>
                <button className="add-order-btn"><i className="fas fa-plus"/> New Order</button>
            </div>
            <div className="info-container">
                <h3>
                    {
                        generalInfoIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setGeneralInfoIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setGeneralInfoIsShown(true)}/>
                    }
                    General Information
                </h3>
                { generalInfoIsShown && <GeneralInformationContainer data={order.generalInformation}/> }
            </div>
            <div className="info-container">
                <h3>
                    {
                        detailsIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setDetailsIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setDetailsIsShown(true)}/>
                    }
                    Details
                </h3>
                { detailsIsShown && <DetailsContainer data={order.details}/> }
            </div>
            <div className="info-container">
                <h3>
                    {
                        scheduleImpactIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setScheduleImpactIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setScheduleImpactIsShown(true)}/>
                    }
                    Schedule Impact
                </h3>
                {
                    scheduleImpactIsShown && <ScheduleImpactContainer data={order.scheduleImpact}
                                                                      onUpdateDetailHandler={onUpdateDetailHandler}
                    />
                }
            </div>
            <div className="info-container">
                <h3>
                    {
                        submittedCostsIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setSubmittedCostsIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setSubmittedCostsIsShown(true)}/>
                    }
                    Submitted Costs
                </h3>
                {
                    submittedCostsIsShown && <CostsContainer typeOfCosts="Submitted"
                                                           data={order.submittedCosts}
                                                             onUpdateDetailHandler={onUpdateDetailHandler}
                    />
                }
            </div>
            <div className="info-container">
                <h3>
                    {
                        revisedCostsIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setRevisedCostsIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setRevisedCostsIsShown(true)}/>
                    }
                    Revised Costs
                </h3>
                {
                    revisedCostsIsShown && <CostsContainer typeOfCosts="Revised"
                                                         data={order.revisedCosts}
                                                         onUpdateDetailHandler={onUpdateDetailHandler}
                    />
                }
            </div>
            <div className="info-container">
                <h3>
                    {
                        approvedCostsIsShown ?
                            <i className="fas fa-angle-up" onClick={() => setApprovedCostsIsShown(false)}/>
                            :
                            <i className="fas fa-angle-down" onClick={() => setApprovedCostsIsShown(true)}/>
                    }
                    Approved Costs
                </h3>
                {
                    approvedCostsIsShown && <CostsContainer typeOfCosts="Approved"
                                                            data={order.approvedCosts}
                                                            onUpdateDetailHandler={onUpdateDetailHandler}
                    />
                }
            </div>
            <div className="btn-container">
                <button className="prev-btn"><i className="fas fa-arrow-left"/> Previous</button>
                <button className="next-btn">Next <i className="fas fa-arrow-right"/></button>
            </div>
        </div>
    )
};

export default OrderDetailsCenterPanel;

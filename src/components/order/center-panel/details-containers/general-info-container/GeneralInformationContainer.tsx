import React from "react";
import '../detailsContainer.css';
import Detail from "../detail";

interface GeneralInformationContainerProps {
    data: {
        divisionCode: number,
        specificationCode: number,
        subcontractDescription: string,
        subcontractNickname: string,
        age: string,
        author: string,
        description: string
    }
}

const GeneralInformationContainer: React.FC<GeneralInformationContainerProps> = (props) => {
    const { data } = props;

    return (
        <div className="details-info-container">
            <Detail title="Division Code" data={data.divisionCode}/>
            <Detail title="Specification Code" data={data.specificationCode}/>
            <Detail title="Subcontract Description" data={data.subcontractDescription}/>
            <Detail title="Subcontract Nickname" data={data.subcontractNickname}/>
            <Detail title="Age" data={data.age} classname="age-red"/>
            <Detail title="Author" data={data.author}/>
            <Detail title="Description" data={data.description} cardclassname="description"/>
        </div>
    );
};

export default GeneralInformationContainer;

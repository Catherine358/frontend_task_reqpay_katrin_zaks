import React from "react";
import DetailWrapper from "../../../../UI/DetailWrapper";

interface DetailProps {
    title: string,
    data: number | string | boolean,
    classname?: string,
    cardclassname?: string,
    editable?: boolean,
    setFormIsShown?: (formIsShown: boolean) => void,
    setInfoToBeUpdated?: (info: string) => void
}

const Detail: React.FC<DetailProps> = (props) => {
    const { title, data } = props;

    return (
        <DetailWrapper title={title}
                       editable={props.editable}
                       setFormIsShown={props.setFormIsShown}
                       setInfoToBeUpdated={props.setInfoToBeUpdated}
                       cardclassname={props.cardclassname}
        >
            <p className={props.classname}>{data}</p>
        </DetailWrapper>
    )
};

export default Detail;

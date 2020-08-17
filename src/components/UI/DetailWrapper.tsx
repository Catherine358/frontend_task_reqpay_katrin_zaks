import React from "react";

interface DetailWrapperProps {
    title: string,
    editable?: boolean,
    setFormIsShown?: (formIsShown: boolean) => void,
    setInfoToBeUpdated?: (info: string) => void,
    cardclassname?: string
}

const DetailWrapper: React.FC<DetailWrapperProps> = (props) => {
    const { title } = props;

    return (
        <div className={`detail ${props.cardclassname}`}>
            <div className="detail-header-container">
                <h5>{title}</h5>
                { props.editable && <i className="fas fa-pencil-alt" onClick={() => {
                    if(props.setInfoToBeUpdated) {
                        props.setInfoToBeUpdated(title);
                    }
                    if(props.setFormIsShown) {
                        props.setFormIsShown(true);
                    }
                }}/> }
            </div>
            {props.children}
        </div>
    )
};

export default DetailWrapper;

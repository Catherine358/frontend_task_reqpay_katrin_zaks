import React, { useRef } from "react";

interface DetailFormProps {
    title: string,
    data: number | string | boolean,
    setFormIsShown: (formIsShown: boolean) => void,
    onUpdateDetailHandler: (newValue: string, infoToUpdate: string) => void,
    infoToBeUpdated: string
}

const DetailForm: React.FC<DetailFormProps> = (props) => {
    const { title, data } = props;
    const textInputRef = useRef<HTMLInputElement>(null);

    const toDoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onUpdateDetailHandler(enteredText, props.infoToBeUpdated);
        props.setFormIsShown(false);
    };

    return (
        <div className="form">
            <form onSubmit={toDoSubmitHandler}>
                <div>
                    <label htmlFor="todo-text">{title}</label>
                    <button><i className="fas fa-times" onClick={() => {
                        props.setFormIsShown(false);
                    }}/></button>
                    <button type="submit"><i className="fas fa-check"/></button>
                </div>
                <input type="text" id="todo-text" ref={textInputRef} defaultValue={data.toString()} autoComplete="on"/>
            </form>
        </div>
    )
};

export default DetailForm;

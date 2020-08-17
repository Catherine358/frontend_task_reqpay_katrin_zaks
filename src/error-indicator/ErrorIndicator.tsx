import React from "react";

interface ErrorIndicatorProps {
    error: string
}

const ErrorIndicator: React.FC<ErrorIndicatorProps> = (props) => {
    return <div className="error-indicator">{props.error}</div>;
};

export default ErrorIndicator;

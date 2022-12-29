import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log("My forced error info: ", info, " error code: ", error);
    }
    
    render() {
        if (this.state.hasError) {
            return <h1> Dev side error has occurred</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
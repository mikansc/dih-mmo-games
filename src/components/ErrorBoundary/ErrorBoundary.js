import * as React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ""
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error.message);
  }

  render() {
    if (this.state.hasError) {
      return <p style={{ color: "red", fontSize: "0.75rem" }}><strong>Erro</strong>: {this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}

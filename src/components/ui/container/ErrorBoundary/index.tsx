import React from "react";
import { StyleError, StyleErrorBoundary } from "./styles";
import { Props, State } from "./types";

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    console.error();
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyleErrorBoundary>
          <StyleError>Something went wrong.</StyleError>
        </StyleErrorBoundary>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

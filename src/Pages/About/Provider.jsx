import React from "react";
import { AboutProvider } from "./index";
import { AboutContainer } from "./container";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>ops, algo deu errado :(</h1>;
    }

    return this.props.children;
  }
}

export const About = () => {
  return (
    <ErrorBoundary>
      <AboutProvider>
        <AboutContainer />
      </AboutProvider>
    </ErrorBoundary>
  );
};

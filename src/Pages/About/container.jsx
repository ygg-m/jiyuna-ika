import React from "react";
import {
  useAbout,
  Title,
  Background,
  PageDescription,
  CookieContainer,
} from "./index";

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

export const AboutContainer = () => {
  const { showCookie } = useAbout();
  return (
    <section id="about" className="page-container">
      <Title>about</Title>

      <PageDescription>
        <p>
          Criada no dia 01/11/2019, a Ika foi fundada por{" "}
          <a href="http://twitter.com/tengumaru">@tengumaru</a>,{" "}
          <a href="http://twitter.com/megazao">@megazao</a> e{" "}
          <a href="http://twitter.com/kblosnack">@kblosnack</a> com intuito de
          juntar pessoas interessadas em fazer Coil of Bahamut.
        </p>
      </PageDescription>
      <ErrorBoundary>
        <CookieContainer cookieData={showCookie} />
      </ErrorBoundary>
      <Background src={showCookie.img} alt={showCookie.dutyName} />
    </section>
  );
};

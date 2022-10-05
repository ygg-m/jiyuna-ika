import "./Style/About.css";

// data
export { default as cookieList } from "../../Data/cookieList";
// context
export { AboutProvider } from "../../Contexts/AboutContext";
export { useAbout } from "../../Contexts/AboutContext";
export { useMenu } from "../../Contexts/MenuContext";

// components
export { Title } from "../../Components/PageStructure/Title";
export { PageDescription } from "../../Components/PageStructure/PageDescription";
export { Background } from "../../Components/PageStructure/Background";
export { CookieContainer } from "../../Components/Cookie/container";
export { Party } from "../../Components/Cookie/Components/Party";

export { AboutContainer } from "./container";

export { BsArrowLeft, BsArrowRight } from "react-icons/bs";

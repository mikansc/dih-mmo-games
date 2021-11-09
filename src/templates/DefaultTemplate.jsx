import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { StyledContent } from "./DefaultTemplate.styles";

const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </>
  );
};

export default DefaultTemplate;

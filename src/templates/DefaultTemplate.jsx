import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultTemplate;

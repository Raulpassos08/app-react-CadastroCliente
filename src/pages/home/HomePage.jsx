import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import MainContainer from "../../components/Main/MainContainer";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* main */}
      <MainContainer />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

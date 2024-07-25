import { userData } from "../../pratice/Examples/userData";
import { Welcome } from "../welcome/WelcomePage";
import "./HomePage.css";
userData;

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Welcome user={userData} />
    </div>
  );
};

export default HomePage;

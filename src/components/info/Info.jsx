import { InfoAge } from "./InfoAge";
import { InfoUsername } from "./InfoUsername";

export const Info = ({ user }) => {
  return (
    <div className="homepage-info">
      <InfoUsername name={user.name} />
      <InfoAge age={user.age} />
    </div>
  );
};

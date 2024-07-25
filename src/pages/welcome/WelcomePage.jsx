import { Info } from "../../components/info/Info";
import { Title } from "../../components/Title";

export const Welcome = ({ user }) => {
  return (
    <div>
      <Title name={user.name} />
      <Info {...{ user }} />
    </div>
  );
};

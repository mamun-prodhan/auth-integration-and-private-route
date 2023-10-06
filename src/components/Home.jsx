import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo.name);
  return (
    <div>
      <h2 className="text-4xl font-bold">This is Home component</h2>
    </div>
  );
};

export default Home;

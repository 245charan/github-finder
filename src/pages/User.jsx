import GithubContext from "../components/context/github/GithubContext";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
function User() {
  const { user, getUser } = useContext(GithubContext);

  const params = useParams()

  useEffect(() => {
    // getUser("245charan");
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
}

export default User;

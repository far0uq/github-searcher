import UserContainer from "./UserContainer";
import RepoContainer from "./RepoContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

function ResultContainer() {
  const users = useSelector((state: RootState) => state.users.users);
  const repos = useSelector((state: RootState) => state.repos.repos);
  const queryType = useSelector((state: RootState) => state.query.queryType);
  const darkModeIsOn = useSelector((state: RootState) => state.darkmode.isOn);

  if (queryType === "users")
    return (
      <div
        style={
          darkModeIsOn
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
      >
        <UserContainer users={users} />
      </div>
    );
  else if (queryType === "repositories")
    return (
      <div
        style={
          darkModeIsOn
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
      >
        <RepoContainer repos={repos} />
      </div>
    );
}

export default ResultContainer;

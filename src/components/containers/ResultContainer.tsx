import UserContainer from "./UserContainer";
import RepoContainer from "./RepoContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import LoadingUsersContrainer from "../loading/LoadingUsersContrainer";
import LoadingReposContrainer from "../loading/LoadingReposContainer";

function ResultContainer() {
  const users = useSelector((state: RootState) => state.users.users);
  const repos = useSelector((state: RootState) => state.repos.repos);
  const queryType = useSelector((state: RootState) => state.query.queryType);
  const darkModeIsOn = useSelector((state: RootState) => state.darkmode.isOn);
  const dataIsLoading = useSelector(
    (state: RootState) => state.loading.dataIsLoading
  );

  if (queryType === "users") {
    if (dataIsLoading) return <LoadingUsersContrainer />;
    else if (users.length > 0) {
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
    }
  } else if (queryType === "repositories") {
    if (dataIsLoading) return <LoadingReposContrainer />;
    else if (repos.length > 0) {
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
  }
}

export default ResultContainer;

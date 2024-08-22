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

  const commonStyles = {
    paddingTop: "80px",
    backgroundColor: darkModeIsOn ? "black" : "white",
    maxHeight: "50%",
  };

  if (queryType === "users") {
    if (dataIsLoading)
      return (
        <div style={commonStyles}>
          <LoadingUsersContrainer rowGap="70%" />
        </div>
      );
    else if (users.length > 0) {
      return (
        <div style={commonStyles}>
          <UserContainer users={users} />
        </div>
      );
    }
  } else if (queryType === "repositories") {
    if (dataIsLoading)
      return (
        <div style={commonStyles}>
          <LoadingReposContrainer containerWidth="50%" />
        </div>
      );
    else if (repos.length > 0) {
      return (
        <div style={commonStyles}>
          <RepoContainer repos={repos} />
        </div>
      );
    }
  }
}

export default ResultContainer;

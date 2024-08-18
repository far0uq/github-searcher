import UserContainer from "./UserContainer";
import RepoContainer from "./RepoContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

function ResultContainer({ searchType }: { searchType: string }) {
  const users = useSelector((state: RootState) => state.users.users);
  const repos = useSelector((state: RootState) => state.repos.repos);

  console.log(repos);
  console.log(searchType);

  if (searchType === "users") return <UserContainer users={users} />;
  else if (searchType === "repositories")
    return <RepoContainer repos={repos} />;
}

export default ResultContainer;

import { Flex, Row } from "antd";
import RepoCard from "../cards/RepoCard";
import Repo from "../../interface/repoInterface";
import { useRef, useEffect, useState } from "react";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import useInfiniteFetch from "../../hooks/useInfiniteFetch";
import LoadingReposContrainer from "../loading/LoadingReposContainer";

function RepoContainer({ repos }: { repos: Repo[] }) {
  const lastElementRef = useRef(null);
  const query = useSelector((state: RootState) => state.query.query);
  const { fetchMorePages, loading } = useInfiniteFetch();
  const [localRepos, setLocalRepos] = useState(repos);

  const addRepos = async () => {
    const moreRepos = (await fetchMorePages(
      query,
      "repositories",
      localRepos
    )) as Repo[];
    if (moreRepos) setLocalRepos(moreRepos);
  };

  useEffect(() => {
    const options = {
      threshold: 1.0,
      rootmMargin: "100px",
    };

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        addRepos();
      }
    }, options);

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [localRepos]);

  return (
    <Flex wrap gap="large" justify="center">
      {localRepos.map((repo, index) =>
        localRepos.length === index + 1 ? (
          <Row ref={lastElementRef} key={repo.id}>
            <RepoCard repo={repo} />
          </Row>
        ) : (
          <Row key={repo.id}>
            <RepoCard repo={repo} />
          </Row>
        )
      )}
      {loading && <LoadingReposContrainer containerWidth="100%" />}
    </Flex>
  );
}

export default RepoContainer;

import axios from 'axios';
import { useEffect, useState } from 'react';

export default fetch = () => {
  const [repoList, setRepoList] = useState();
  const [username, setusername] = useState();

  const getRepos = () => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        setRepoList(res.data);
      })
      .catch((err) => console.log(err));
  };

  return {
    repoList,
    getRepos,
    setusername,
  };
};

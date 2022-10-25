import axios from 'axios';
import { useEffect, useState } from 'react';

const Fetch = () => {
  const [repoList, setRepoList] = useState();
  const [username, setusername] = useState();
  const [loading, setLoading] = useState();

  const getRepos = () => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        setusername('');
        setRepoList(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return {
    repoList,
    getRepos,
    username,
    setusername,
    loading,
  };
};

export default Fetch;

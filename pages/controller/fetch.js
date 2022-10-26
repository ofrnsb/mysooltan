import axios from 'axios';
import { useEffect, useState } from 'react';
import { appData } from '../modals/reducerModals';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setRepoList } from './action';

const Fetch = () => {
  const uname = useSelector((state) => state.username);
  const dispatch = useDispatch();

  const setRepo = (res) => {
    dispatch(setRepoList(res));
  };

  const getLoading = (res) => {
    dispatch(setLoading(res));
  };

  const getRepos = () => {
    getLoading(true);
    axios
      .get(`https://api.github.com/users/${uname}/repos`)
      .then((res) => {
        setRepo(res.data);
        getLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return {
    getRepos,
  };
};

export default Fetch;

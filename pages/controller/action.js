export const setUserName = (username) => {
  return {
    type: 'setUserName',
    payload: username,
  };
};

export const setRepoList = (res) => {
  return {
    type: 'setRepoList',
    payload: res,
  };
};
export const setLoading = (res) => {
  return {
    type: 'setLoading',
    payload: res,
  };
};

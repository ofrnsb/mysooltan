import styles from '../../../styles/Content.module.css';
import Fetch from '../../controller/Fetch';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../controller/action';

const Content = () => {
  const { getRepos } = Fetch();
  const dispatch = useDispatch();
  const uname = useSelector((state) => state.username);
  const loading = useSelector((state) => state.loading);
  const repoList = useSelector((state) => state.repoList);

  const setUname = (value) => {
    dispatch(setUserName(value));
  };

  return (
    <div className={styles.mainContainer}>
      <section className={styles.header}>
        <h2>LETS FIND THEIR REPOS :D</h2>
      </section>

      <section className={styles.Content}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="whose GITHUB?"
            name="inputName"
            value={uname}
            onChange={(e) => {
              const { value } = e.target;
              setUname(value);
            }}
          />
          <button
            className={styles.button}
            onClick={() => {
              getRepos();
            }}
          >
            search
          </button>
        </div>

        <div className={styles.listWrapper}>
          {loading ? (
            <div className={styles.loading}></div>
          ) : repoList.length > 1 ? (
            <div>
              <p className={styles.lord}>
                i present your their repos list, my lord
              </p>
              {(repoList || []).map((data, index) => (
                <div className={styles.list} key={index}>
                  <p>{data.name}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Content;

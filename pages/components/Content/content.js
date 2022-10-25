import styles from '../../../styles/Content.module.css';
import Fetch from '../../controller/Fetch';

const Content = () => {
  const { repoList, getRepos, username, setusername, loading } = Fetch();
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
            value={username}
            onChange={(e) => {
              const { value } = e.target;
              setusername(value);
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
          ) : repoList ? (
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

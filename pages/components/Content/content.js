import styles from '../../../styles/Content.module.css';
import Fetch from '../../controller/Fetch';

const Content = () => {
  const { repoList, getRepos, setusername } = Fetch();
  return (
    <div className={styles.mainContainer}>
      <section className={styles.header}>
        <h2>HOW TO GET GITHUB USER'S REPO</h2>
      </section>

      <section className={styles.Content}>
        <div>
          <label htmlFor="inputName">search</label>
          <input
            type="text"
            placeholder="search by name"
            name="inputName"
            onChange={(e) => {
              const { value } = e.target;
              setusername(value);
            }}
          />
          <button
            onClick={() => {
              getRepos();
            }}
          >
            search
          </button>
        </div>

        <div>
          {(repoList || []).map((data, index) => (
            <div className={styles.list} key={index}>
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;

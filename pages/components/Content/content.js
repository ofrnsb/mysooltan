import styles from '../../../styles/Content.module.css';

const Content = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.header}>
        <h2>HOW TO GET GITHUB USER'S REPO</h2>
      </section>

      <section className={styles.content}>
        <label htmlFor="inputName">search</label>
        <input type="text" placeholder="search by name" name="inputName" />
      </section>
    </div>
  );
};

export default Content;

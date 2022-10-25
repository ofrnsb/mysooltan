import styles from '../../../styles/Content.module.css';
import fetch from '../../controller/fetch';

const Content = () => {
  const { repoList, getRepos, setusername } = fetch();
  return (
    <div className={styles.mainContainer}>
      <section className={styles.header}>
        <h2>HOW TO GET GITHUB USER'S REPO</h2>
      </section>

      <section className={styles.Content}>
        <div>
          <label htmlFor="inputName">search</label>
          <input type="text" placeholder="search by name" name="inputName" />
          <button>search</button>
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          aut corrupti voluptate fuga dolorum quis magni numquam, totam placeat
          molestias sunt aliquid unde omnis? Laboriosam totam expedita nisi, non
          voluptatibus asperiores illo eligendi id praesentium voluptas
          consequuntur officiis a ratione magnam labore enim harum earum quidem
          magni voluptates sit optio distinctio quisquam! Rerum delectus amet
          dignissimos asperiores animi nobis recusandae! Reiciendis natus
          blanditiis veritatis sint quas commodi perspiciatis alias dolore.
          Blanditiis vel aspernatur voluptatem, velit reiciendis odio veniam
          voluptatum ipsam a libero culpa harum quaerat placeat ab laborum
          aperiam error molestiae, nobis molestias iure magni ipsa neque. Quod,
          laudantium deleniti! Quia id fugiat aspernatur voluptatibus corporis
          voluptate atque facilis amet magnam cumque suscipit, aperiam eaque in,
          quidem ullam, dolorum tempore pariatur. Cumque atque omnis commodi
          impedit eius excepturi ab. Minus nam odit blanditiis, incidunt
          doloremque consequatur dolor quam assumenda laudantium labore sint
          accusamus praesentium earum dolorum nemo beatae ullam unde.
          Praesentium odit adipisci similique nihil dolor soluta fuga in
          asperiores voluptatibus, quas, repudiandae dolore quae, illo facilis?
          Cupiditate, pariatur! Tempore quos asperiores impedit laborum rerum
          quo minus nisi. Itaque, esse accusamus. Exercitationem eos sit natus
          consequatur cupiditate quidem, optio, vero excepturi velit doloremque
          molestias dicta quia nostrum sunt cumque provident!
        </div>
      </section>
    </div>
  );
};

export default Content;

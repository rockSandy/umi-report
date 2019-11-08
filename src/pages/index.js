import styles from './index.css';
import router from 'umi/router';


export default function() {
  function goto() {
    router.push('/xxxx')
  }

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} onClick={goto}/>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}

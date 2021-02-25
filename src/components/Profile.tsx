import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/victorqrz.png" alt="Victor Queiroz"/>
      <div>
        <strong>Victor Queiroz</strong>
        <p>
          <img src="icons/level.svg" alt="Experience level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}
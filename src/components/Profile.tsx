import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="/avatar2.png" alt="User Avatar"/>
      <div>
        <strong>User</strong>
        <p>
          <img src="icons/level.svg" alt="Experience level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
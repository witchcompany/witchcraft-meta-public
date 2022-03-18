import React from 'react';
import { Grid } from 'react-loading-icons';
import styles from './index.scss';

export default function SeniorModel() {
  return (
    <div className="App">
      <div className={styles.loading}>
      <Grid height="30%" width="100%" strokeWidth={2} speed={2} fill="#995AFF" fillOpacity={1} strokeOpacity={1} />
      </div>
    </div>
  );
}
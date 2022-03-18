import React from 'react';
import styles from './index.scss';

export default function BareTrees() {
  return (
    <div className="App">
      <div className={styles.loading}>
        <img src="https://wcraft.s3.ap-northeast-2.amazonaws.com/media/kisum_loading_v3.gif" alt="" />
      </div>
    </div>
  );
}
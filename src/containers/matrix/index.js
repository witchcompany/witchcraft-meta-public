import React from 'react';
import styles from './index.scss';

export default function Index(props) {
  return (
    <div className="App">
      <div className={styles.loading}>
        <img src="https://wcraft.s3.ap-northeast-2.amazonaws.com/media/LM_Matrix_GIF-Sticker_PillGlitch.gif" alt="" />
      </div>
    </div>
  );
}
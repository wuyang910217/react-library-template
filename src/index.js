import React from 'react';
import styles from './index.module.less';

export default function(props) {
  return (
    <button
      className={styles.button}
      style={{
        fontSize: props.size === 'large' ? 40 : 20,
      }}
    >
      {props.children}
    </button>
  );
}

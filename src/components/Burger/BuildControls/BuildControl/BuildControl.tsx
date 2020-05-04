import React from 'react';

import styles from './BuildControl.module.css';

interface Props {
  label: string;
  added: () => void;
  removed: () => void;
  disabled: boolean;
}

const BuildControl = (props: Props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button
      className={styles.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={styles.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;

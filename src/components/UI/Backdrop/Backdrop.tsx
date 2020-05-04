import React from 'react';

import styles from './Backdrop.module.css';

interface Props {
  show: boolean;
  clicked: () => void;
}

const Backdrop = (props: Props) => {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;

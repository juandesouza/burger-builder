import React from 'react';
import styles from './Button.module.css';

interface Props {
  children: any;
  clicked: () => void;
  btnType: string;
}

const Button = (props: Props) => (
  <button
    className={[styles.Button, styles[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;

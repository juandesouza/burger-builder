import React from 'react';

import styles from './NavigationItem.module.css';

interface Props {
  children: any;
  link: string;
  active?: boolean;
}

const NavigationItem = (props: Props) => (
  <li className={styles.NavigationItem}>
    <a
      href={props.link}
      className={props.active ? styles.active : undefined}
    >
      {props.children}
    </a>
  </li>
);

export default NavigationItem;

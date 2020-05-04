import React from 'react';

import burgerLogo from '../../assets/images/original.png';
import styles from './Logo.module.css';

interface Props {
  height?: string;
}

const Logo = (props: Props) => (
  <div className={styles.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt='Burger Builder' />
  </div>
);

export default Logo;

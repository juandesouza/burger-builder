import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

interface Props {}

const NavigationItems = (props: Props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link='/' active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;

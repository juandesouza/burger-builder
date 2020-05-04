import React from "react";

import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface Props {
  ingredientsProps: object;
}

const Burger = (props: Props) => {
  let transformedIngredients: any = Object.keys(
    props.ingredientsProps
  )
    .map(igKey => {
      return [...Array(props.ingredientsProps[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .flat();
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;

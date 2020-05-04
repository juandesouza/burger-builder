import React from 'react';
// import Button from '@material-ui/core/Button';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
// import StyledButton from '../../../assets/StyledButton';

interface Props {
  ingredientAdded: (type: string) => void;
  ingredientRemoved: (type: string) => void;
  disabled: object;
  price: number;
  purchasable: boolean;
  ordering: () => void;
}

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props: Props) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordering}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;

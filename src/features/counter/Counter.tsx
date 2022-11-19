import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.scss";

import Button from "../../components/Button";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <Button
          ariaLabel="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>

        <span className={styles.value}>{count}</span>

        <Button
          ariaLabel="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>

        <Button
          useAsyncStyle
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>

        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </div>
    </div>
  );
}

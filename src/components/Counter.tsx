import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import store from "./CounterStore";
import tr from "../intl/tr";

const Counter: FunctionComponent = () => {
  const increment = () => {
    store.increment();
  };

  const decrement = () => {
    store.decrement();
  };

  return (
    <>
      <button onClick={increment}> {tr("increment")} </button>
      <span> {store.counter} </span>
      <button onClick={decrement}> {tr("decrement")} </button>
    </>
  );
};

export default observer(Counter);

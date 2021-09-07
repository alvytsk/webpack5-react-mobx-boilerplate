import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import store from "./CounterStore";

const Counter: FunctionComponent = () => {
  return (
    <>
      <button onClick={() => store.increment()}> Increment </button>
      <span> {store.counter} </span>
      <button onClick={() => store.decrement()}> Decrement </button>
    </>
  );
};

export default observer(Counter);

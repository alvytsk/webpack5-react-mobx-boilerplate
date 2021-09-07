import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import store from "./LangStore";

const ChangeLang: FunctionComponent = () => {
  return (
    <>
      <button
        onClick={() => {
          store.changeLang();
        }}
      >
        {store.lang === "ru" ? "RU -> EN" : "EN -> RU"}
      </button>
    </>
  );
};

export default observer(ChangeLang);

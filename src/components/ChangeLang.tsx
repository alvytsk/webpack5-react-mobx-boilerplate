import React, { FunctionComponent, useState } from "react";
import { observer } from "mobx-react";
import store from "./LangStore";

const ChangeLang: FunctionComponent = () => {
  function handleDropdownChange(e: any) {
    store.changeLang(e.target.value);
  }

  return (
    <>
      <select
        name="langs"
        id="lang-select"
        onChange={handleDropdownChange}
        defaultValue={store.lang}
      >
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </>
  );
};

export default observer(ChangeLang);

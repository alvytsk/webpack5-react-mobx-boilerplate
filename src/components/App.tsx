import React from "react";
import "./App.less";
import Counter from "./Counter";
import ChangeLang from "./ChangeLang";
import tr from "../intl/tr";
import { I18nProvider, LOCALES } from "../intl";
import store from "./LangStore";
import { observer } from "mobx-react";

const App = () => {
  return (
    <I18nProvider
      key={store.lang}
      locale={store.lang === "ru" ? LOCALES.RU : LOCALES.EN}
    >
      <div className="app">
        {tr("title")}
        <p />
        <Counter />

        <p />
        <ChangeLang />
      </div>
    </I18nProvider>
  );
};

export default observer(App);

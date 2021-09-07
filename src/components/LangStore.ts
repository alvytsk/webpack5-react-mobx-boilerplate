import { observable, makeAutoObservable } from "mobx";

class LangStore {
  lang: string = "ru";

  constructor() {
    makeAutoObservable(this);
  }

  changeLang() {
    this.lang = this.lang === "ru" ? "en" : "ru";
  }
}

export default new LangStore();

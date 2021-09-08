import { observable, makeAutoObservable } from "mobx";

class LangStore {
  lang: string = "ru";

  constructor() {
    makeAutoObservable(this);
  }

  changeLang(lang: string) {
    this.lang = lang;
  }
}

export default new LangStore();

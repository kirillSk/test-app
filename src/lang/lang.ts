const lang = {
  get: () => {
    return localStorage.getItem('lang') ?? "ru";
  },
  set: (lang:string) => {
    localStorage.setItem('lang', lang.toLowerCase());
    window.location = window.location;
  }
};

export default lang;
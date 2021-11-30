interface ICookieStorage {
  get: (name: string, value: string) => string | null;
  set: (name: string, value: string, expirationDays: number) => void;
  clear: (name: string) => void;
}

const cookieStorage: ICookieStorage = {
  set: (name, value, expirationDays) => {
    var d = new Date();
    d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  },
  //TODO: check this, copilot wrote it
  get: (name) => {
    const tmpName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(tmpName) == 0) {
        return c.substring(tmpName.length, c.length);
      }
    }
    return "";
  },
  clear: (name) => {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },
};

export { cookieStorage };

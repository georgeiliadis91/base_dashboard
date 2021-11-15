interface IStorage {
  get: (name: string) => string | null;
  set: (name: string, value: string) => void;
  clear: (name: string) => void;
}

// Checking if localstorage is supported.
const isLocalStorageSupported = (() => {
  if (!("localStorage" in window)) {
    return false;
  }

  try {
    const key = "_ls_test_";

    localStorage.setItem(key, key);
    localStorage.getItem(key);
    localStorage.removeItem(key);

    return true;
  } catch {
    return false;
  }
})();

const LocalStorage: IStorage = {
  get: (name: string) => {
    return localStorage.getItem(name);
  },
  set: (name: string, value: string) => {
    localStorage.setItem(name, value);
  },
  clear: (name: string) => {
    localStorage.removeItem(name);
  },
};

export { LocalStorage, isLocalStorageSupported };

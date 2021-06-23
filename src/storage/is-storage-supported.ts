import { checkCookies } from "./cookies";

const setAndRemoveStorageKey = (storageType: Storage) => {
  const TEST_KEY = "SMART_STORAGE";
  storageType.setItem(TEST_KEY, "test");
  storageType.removeItem(TEST_KEY);
  return true;
};

const checkStorage = (storageType: Storage) => {
  try {
    return setAndRemoveStorageKey(storageType);
  } catch (error) {
    return false;
  }
};

const storageTypeStartsWith = (storageType: string, compareVal: string): boolean => {
  if (storageType.toLowerCase().startsWith(compareVal)) return true;
  return false;
};

const isStorageSupported = (storageType: string = "localStorage") => {
  switch (true) {
    case storageTypeStartsWith(storageType, "local"):
      return checkStorage(localStorage);

    case storageTypeStartsWith(storageType, "session"):
      return checkStorage(sessionStorage);

    case storageTypeStartsWith(storageType, "cookies"):
      return checkCookies();

    case storageTypeStartsWith(storageType, "memory"):
      return true;

    default:
      throw new Error("Please you must use one of the available storageType: localStorage, sessionStorage, cookies, memory");
  }
};

export default isStorageSupported;

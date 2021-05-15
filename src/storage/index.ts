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

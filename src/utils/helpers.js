import ls from "local-storage";

export const areEqualObjects = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export const getStorageObject = lsId => {
  const lsItem = ls.get(lsId);
  return lsItem ? lsItem : null;
};

export const setStorageObject = (lsId, obj = {}) => {
  const lsObject = getStorageObject(lsId);
  const newObj = lsObject ? lsObject : {};

  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = value;
  }

  ls.set(lsId, newObj);

  return newObj;
};

export default {
  areEqualObjects,
  getStorageObject,
  setStorageObject
};

export const save = (item, query) => {
  localStorage.setItem(query, JSON.stringify(item));
};

export const get = (query) => {
  const item = localStorage.getItem(query);
  if (!!item) {
    return item;
  } else {
    return "";
  }
};

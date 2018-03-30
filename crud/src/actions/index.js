let nextItem = 0;

export const addItem = payload => ({
  type: "ADD_ITEM",
  id: nextItem++,
  payload
});

export const removeItem = id => ({
  type: "REMOVE_ITEM",
  id
});

export const updateItem = (id, payload) => ({
  type: "UPDATE_ITEM",
  id,
  payload
});

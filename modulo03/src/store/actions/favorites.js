export const addFavorite = text => ({
  type: 'ADD_FAVORITE',
  payload: {
    text,
  },
});

export const removeFavorite = id => ({
  type: 'REMOVE_FAVORITE',
  payload: {
    id,
  },
});

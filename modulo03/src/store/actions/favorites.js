export const addFavoriteRequest = repoName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repoName,
  },
});

// export const removeFavorite = id => ({
//   type: 'REMOVE_FAVORITE',
//   payload: {
//     id,
//   },
// });

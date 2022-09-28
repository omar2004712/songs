/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
export const selectSong = (song) => {
  return {
    type: 'SELECT_SONG',
    payload: song,
  };
};

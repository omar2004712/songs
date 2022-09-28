import { combineReducers } from 'redux';

const songsReducer = () => [
  {
    title: 'song 1',
    duartion: '2:15',
  },
  {
    title: 'song 2',
    duartion: '3:23',
  },
  {
    title: 'song 3',
    duartion: '2:32',
  },
  {
    title: 'song 4',
    duration: '4:10',
  },
];

// eslint-disable-next-line default-param-last
const selectSongReducer = (state = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});

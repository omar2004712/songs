/* eslint-disable react/prop-types */
import '../styles/index.css';
import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// eslint-disable-next-line no-shadow
function SongsList({ songs, selectSong }) {
  const renderedSongs = songs.map((song) => (
    <div
      key={song.title}
      className="items-center group flex font-semibold hover:bg-gray-100 p-4 rounded"
    >
      <h1 className="group-hover:text-[19px] text-lg flex-1">{song.title}</h1>
      <button
        type="button"
        onClick={() => selectSong(song)}
        className="bg-blue-500 py-1 px-2 rounded text-white hover:bg-blue-600"
      >
        select
      </button>
    </div>
  ));

  return <div className="flex flex-col gap-1">{renderedSongs}</div>;
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongsList);

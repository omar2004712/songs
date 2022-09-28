/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

function SongDetail({ song }) {
  if (!song) {
    return (
      <div className="flex items-center justify-center text-2xl text-gray-400">
        Select a song
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="font-semibold text-2xl">{song.title}</h1>
      <p className="italic text-gray-500">duration: {song.duration}</p>
    </div>
  );
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

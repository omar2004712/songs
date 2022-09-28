/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

function SongsList({ songs }) {
  const renderedSongs = songs.map((song) => (
    <div>
      <h1>{song.title}</h1>
      <button>select</button>
    </div>
  ));

  return <div>{renderedSongs}</div>;
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongsList);

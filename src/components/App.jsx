import '../styles/index.css';
import React from 'react';
import SongsList from './SongsList';

export default function App() {
  return (
    <div className="p-2 grid grid-cols-2">
      <SongsList />
    </div>
  );
}

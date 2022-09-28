import '../styles/index.css';
import React from 'react';
import SongsList from './SongsList';
import SongDetail from './SongDetail';

export default function App() {
  return (
    <div className="p-2 grid grid-cols-2 gap-x-5 max-w-[800px] m-auto">
      <SongsList />
      <SongDetail />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';


export function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to LandL!</h1>
      <p className="text-lg">Embark on epic quests, create custom characters, and shape your own adventure in this immersive text-based D&D app.</p>
      <div className="mt-4">
        <Link to="/create-character" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create a Character</Link>
        <Link to="/quests" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Browse Quests</Link>
      </div>
    </div>
  );
}
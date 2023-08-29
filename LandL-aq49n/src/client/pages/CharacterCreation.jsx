import React, { useState } from 'react';
import { useAction } from '@wasp/actions';
import createCharacter from '@wasp/actions/createCharacter';

export function CharacterCreation() {
  const createCharacterFn = useAction(createCharacter);
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [abilities, setAbilities] = useState('');
  const [backstory, setBackstory] = useState('');

  const handleSubmit = () => {
    createCharacterFn({ name, race, characterClass, abilities, backstory });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Create a New Character</h1>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Name:</label>
        <input
          type="text"
          className="px-2 py-1 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Race:</label>
        <input
          type="text"
          className="px-2 py-1 border rounded"
          value={race}
          onChange={(e) => setRace(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Class:</label>
        <input
          type="text"
          className="px-2 py-1 border rounded"
          value={characterClass}
          onChange={(e) => setCharacterClass(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Abilities:</label>
        <input
          type="text"
          className="px-2 py-1 border rounded"
          value={abilities}
          onChange={(e) => setAbilities(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Backstory:</label>
        <textarea
          className="px-2 py-1 border rounded"
          value={backstory}
          onChange={(e) => setBackstory(e.target.value)}
        ></textarea>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Character
      </button>
    </div>
  );
}
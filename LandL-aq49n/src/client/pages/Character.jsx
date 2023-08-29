import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getUserCharacters from '@wasp/queries/getUserCharacters';
import getCharacterQuests from '@wasp/queries/getCharacterQuests';

export function Character() {
  const { characterId } = useParams();
  const { data: character, isLoading: characterLoading, error: characterError } = useQuery(getUserCharacters);
  const { data: quests, isLoading: questsLoading, error: questsError } = useQuery(getCharacterQuests, { characterId });

  if (characterLoading || questsLoading) return 'Loading...';
  if (characterError) return 'Error: ' + characterError;
  if (questsError) return 'Error: ' + questsError;

  return (
    <div>
      <h1>Character Details</h1>
      <p>Name: {character.name}</p>
      <p>Race: {character.race}</p>
      <p>Class: {character.class}</p>
      <p>Abilities: {character.abilities}</p>
      <p>Backstory: {character.backstory}</p>
      <h2>Quests</h2>
      {quests.map((quest) => (
        <div key={quest.id}>
          <p>Name: {quest.name}</p>
          <p>Description: {quest.description}</p>
          <p>Status: {quest.status}</p>
          <p>Outcome: {quest.outcome}</p>
        </div>
      ))}
    </div>
  );
}
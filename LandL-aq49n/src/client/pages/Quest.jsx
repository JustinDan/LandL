import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import completeQuest from '@wasp/actions/completeQuest';

export function Quest() {
  const { questId } = useParams();
  const { data: quest, isLoading, error } = useQuery(getQuest, { questId });
  const completeQuestFn = useAction(completeQuest);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCompleteQuest = () => {
    completeQuestFn({ questId });
  };

  return (
    <div>
      <h1>Quest Page</h1>
      <p>Quest ID: {questId}</p>
      <h2>{quest.name}</h2>
      <p>{quest.description}</p>
      <p>Status: {quest.status}</p>
      <p>Outcome: {quest.outcome}</p>
      {quest.status === 'Pending' && (
        <button onClick={handleCompleteQuest}>Complete Quest</button>
      )}
      <Link to={`/character/${quest.characterId}`}>Go to Character</Link>
    </div>
  );
}
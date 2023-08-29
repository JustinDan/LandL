import HttpError from '@wasp/core/HttpError.js'

export const createCharacter = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const { name, race, class, abilities, backstory } = args;

  const character = await context.entities.Character.create({
    data: {
      name,
      race,
      class,
      abilities,
      backstory,
      user: { connect: { id: context.user.id } }
    }
  });

  return character;
}

export const startQuest = async (args, context) => {
  const { name, description, characterId } = args;

  if (!context.user) { throw new HttpError(401) };

  const character = await context.entities.Character.findUnique({
    where: { id: characterId }
  });

  if (!character) { throw new HttpError(404, `Character with id ${characterId} not found.`) };

  const quest = await context.entities.Quest.create({
    data: {
      name,
      description,
      status: 'In Progress',
      character: { connect: { id: characterId } }
    }
  });

  return quest;
}

export const completeQuest = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const quest = await context.entities.Quest.findUnique({
    where: { id: args.id }
  });
  if (!quest) { throw new HttpError(404) };

  const updatedQuest = await context.entities.Quest.update({
    where: { id: args.id },
    data: { status: "Completed", outcome: args.outcome }
  });

  return updatedQuest;
}
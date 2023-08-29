import HttpError from '@wasp/core/HttpError.js'

export const getUserCharacters = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Character.findMany({
    where: { userId: context.user.id }
  })
}

export const getCharacterQuests = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const { characterId } = args;

  const quests = await context.entities.Quest.findMany({
    where: { characterId }
  });

  return quests;
}

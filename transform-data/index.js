// 1: Delete an item from an array
const newPlayers = players.filter((player) => player.id !== ID_TO_DELETE);

// 2: Replace an item at an array index
players[indexToReplace] = newPlayer;

const newPlayers = [
  ...players.slice(0, INDEX_TO_REPLACE),
  newPlayer,
  ...players.slice(INDEX_TO_REPLACE + 1),
];

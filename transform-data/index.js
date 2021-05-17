// 1. Delete an item from an array
const newPlayers = players.filter((player) => player.id !== ID_TO_DELETE);

// 2. Replace an item at an array index
players[indexToReplace] = newPlayer;

const newPlayers = [
  ...players.slice(0, INDEX_TO_REPLACE),
  newPlayer,
  ...players.slice(INDEX_TO_REPLACE + 1),
];

// 3. Create an empty array of X items
Array.from({ length: 5 }, (_, index) => index);
// => [0, 1, 2, 3, 4]

Array.from({ length: 5 }, () => '');
// => ['', '', '', '', '']

Array.from({ length: 5 }, (_, index) => index * 2);
// => [0, 2, 4, 6, 8]

Array.from({ length: 5 });
// => [undefined, undefined, undefined, undefined, undefined]
